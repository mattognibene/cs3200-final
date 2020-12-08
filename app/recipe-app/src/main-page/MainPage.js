import React, {Component} from 'react';
import './MainPage.css';
import RecipePage from "../recipe-page/RecipePage";
import NetworkModule from "../NetworkModule";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

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

    getRecipesCanMake(val) {
        const listOfIngredients = val.split(/\r?\n/);
        console.log(listOfIngredients)
        NetworkModule.getRecipesCanMake(listOfIngredients).then(r => {
            this.setState({recipes: r.recipe_ids})
        })
    }

    getRecipesHaveIngredients(val) {
        const listOfIngredients = val.split(/\r?\n/);
        console.log(listOfIngredients)
        NetworkModule.getRecipesHaveIngredients(listOfIngredients).then(r => {
            this.setState({recipes: r.recipe_ids})
        })
    }

    getListItems() {
        const listItems = this.state.recipes.map((recipe) =>
            <li>
                <p className="Recipes-found"
                   onClick={() => this.setState({selectedRecipe: recipe})}>
                    {recipe.recipe_name}</p>
            </li>
        )
        return (
            <ul>{listItems}</ul>);
    }

    render() {
        return(
            <div className="Main-Page">
                <div className="Within-Page">
                    <h1 className="Main-Page-header">Recipe Generator</h1>
                    <textarea value={this.state.ingredients}
                              onChange={this.handleChange}
                              rows={10} cols={30}
                              placeholder={"Enter your ingredients like this: \nPeas \nCarrots \nTomato"}/>
                        <p>
                            Find recipes that contain all ingredients listed:
                            <p>
                                <button onClick={() => this.getRecipesCanMake(this.state.ingredients)} >
                                    Get Recipes </button>
                            </p>
                        </p>
                        <p>
                            Find recipes that mention the ingredients listed:
                            <p>
                                <button onClick={() => this.getRecipesHaveIngredients(this.state.ingredients)} >
                                    Get All Recipes </button>
                            </p>
                        </p>
                    <p className="Sub-Header">
                        Recipes Found:
                    </p>
                    <div>
                        <ul>
                            {this.getListItems()}
                        </ul>
                        <RecipePage recipe_id={this.state.selectedRecipe.recipe_id}
                                    name={this.state.selectedRecipe.recipe_name}
                                    description={this.state.selectedRecipe.description}
                                    minToPrepare={this.state.selectedRecipe.minutes_to_prepare}
                                    rating={this.state.selectedRecipe.avg_rating} />
                    </div>
                </div>
            </div>
        );
    }
}


export default MainPage;