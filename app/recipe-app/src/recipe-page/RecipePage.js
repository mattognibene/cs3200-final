import React, {Component} from 'react';
import './RecipePage.css';

class RecipePage extends Component {

    getIngredientsList() {
        const ingredientsList = this.props.ingredients.map((ingredient) =>
            <li className="Ingredients-list">
                {ingredient}
            </li>
        )
        return (
            <ul>{ingredientsList}</ul>);
    }

    getStepsList() {
        const stepsList = this.props.steps.map((steps) =>
            <li className="Steps-list">
                {steps}
            </li>
        )
        return (
            <ol>{stepsList}</ol>);
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
                        {this.props.ingredients && "Ingredients"}
                    </p>
                    <ul>
                        {this.props.ingredients && this.getIngredientsList()}
                    </ul>
                    <p className="Steps">
                        {this.props.steps && "Steps"}
                    </p>
                    <ol>
                        {this.props.steps && this.getStepsList()}
                    </ol>
                </header>
            </div>
        );
    }
}


export default RecipePage;