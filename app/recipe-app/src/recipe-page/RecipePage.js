import React, {Component} from 'react';
import './RecipePage.css';
import NetworkModule from "../NetworkModule";

class RecipePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.fetchIngredients()
        this.fetchSteps()
        this.fetchTags()
    }

    getTagsList(tags) {
        const tagsList = tags.map((tag) =>
            <li className="Ingredients-list">
                {tag}
            </li>
        )
        return (<ul>{tagsList}</ul>);
    }

    fetchTags() {
        NetworkModule.getRecipeTags(this.props.recipe_id).then(res => {
            this.setState({tagsList: res.tags})
        })
    }

    getIngredientsList(ingredients) {
        console.log(ingredients)
        const ingredientsList = ingredients.map((ingredient) =>
            <li className="Ingredients-list">
                {ingredient}
            </li>
        )
        return (<ul>{ingredientsList}</ul>);
    }

    fetchIngredients() {
        NetworkModule.getRecipeIngredients(this.props.recipe_id).then(res => {
            this.setState({ingredientsList: res.ingredients})
        })
    }

    getStepsList(steps) {
        const stepsList = steps.map((step) =>
            <li className="Steps-list">
                {step}
            </li>
        )
        return (<ol>{stepsList}</ol>);
    }

    fetchSteps() {
        NetworkModule.getRecipeSteps(this.props.recipe_id).then(res => {
            this.setState({stepsList: res.steps})
        })
    }

    getRating() {
        return "Rating: " + this.props.rating + " stars";
    }

    getMinToPrepare() {
        return "Minutes to prepare: " + this.props.minToPrepare;
    }

    render() {
        return (
            <div className="Recipe-Page">
                <header className="Recipe-Page-header">
                    <p>
                        {this.props.name}
                    </p>
                    <p className="Description">
                        {this.props.description}
                    </p>
                    <p className="Rating">
                        {this.props.rating && this.getRating()}
                    </p>
                    <p className="Min-to-prepare">
                        {this.props.minToPrepare && this.getMinToPrepare()}
                    </p>
                    <p className="Ingredients">
                        {this.props.recipe_id && this.state.ingredientsList && "Ingredients:"}
                    </p>
                    <ul>
                        {this.props.recipe_id && this.state.ingredientsList && this.getIngredientsList(this.state.ingredientsList)}
                    </ul>
                    <p className="Steps">
                        {this.props.recipe_id && this.state.stepsList && "Steps:"}
                    </p>
                    <ol>
                        {this.props.recipe_id && this.state.stepsList && this.getStepsList(this.state.stepsList)}
                    </ol>
                    <p className="Ingredients">
                        {this.props.recipe_id && this.state.tagsList && "Here are the categories this recipe fits under:"}
                    </p>
                    <ul>
                        {this.props.recipe_id && this.state.tagsList && this.getTagsList(this.state.tagsList)}
                    </ul>
                </header>
            </div>
        );
    }
}


export default RecipePage;