import React, {Component} from 'react';
import './MainPage.css';
import RecipePage from "../recipe-page/RecipePage";
import NetworkModule from "../NetworkModule";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: '',
            recipes: [],
            selectedRecipe: {}
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ingredients: event.target.value});
    }

    getRecipes(val) {
        const listOfIngredients = val.split(/\r?\n/);
        const recipeArray = []
        console.log(listOfIngredients)
        NetworkModule.getRecipes(listOfIngredients).then(r => {
            r.recipes.forEach(element => {
                console.log(element.name)
                recipeArray.push(element)
            });
            console.log(recipeArray)
            this.setState({recipes: recipeArray})
        })
    }

    getListItems() {
        const listItems = this.state.recipes.map((recipe) =>
            <li>
                <p className="Recipes-found"
                   onClick={() => this.setState({selectedRecipe: recipe})}>
                    {recipe.name}</p>
            </li>
        )
        return (
            <ul>{listItems}</ul>);
    }

    render() {
        return(
            <div className="Main-Page">
                <h1 className="Main-Page-header">Recipe Generator</h1>
                <textarea value={this.state.ingredients} onChange={this.handleChange} rows={10} cols={20} />
                    <p>
                        <button onClick={() => this.getRecipes(this.state.ingredients)} >
                            Get Recipes </button>
                    </p>
                <p className="Sub-Header">
                    Recipes Found:
                </p>
                <div>
                    <ul>
                        {this.getListItems()}
                    </ul>
                    <RecipePage name={this.state.selectedRecipe.name}
                                description={this.state.selectedRecipe.description}
                                minToPrepare={this.state.selectedRecipe.minToPrepare}
                                rating={this.state.selectedRecipe.rating}
                                ingredients={this.state.selectedRecipe.ingredients}
                                steps={this.state.selectedRecipe.steps}/>
                </div>
            </div>
        );
    }
}


export default MainPage;