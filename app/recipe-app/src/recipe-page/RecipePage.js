import React, {Component} from 'react';
import './RecipePage.css';

class RecipePage extends Component {
    render() {
        return (
            <div className="Recipe-Page">
                <header className="Recipe-Page-header">
                    <p>
                        Stuffing Bites
                    </p>
                    <p className="Rating">
                        Rating: 4.3 stars
                    </p>
                    <p className="Min-to-prepare">
                        Minutes to prepare: 20
                    </p>
                    <p className="Description">
                        Taking Thanksgiving leftovers to the next level, these crispy, gooey, crunchy stuffing bites are sure to please.
                    </p>
                    <p className="Ingredients">
                        Ingredients:
                    </p>
                    <ul>
                        <li className = "Ingredients-list">2 cups leftover mashed potatoes</li>
                        <li className = "Ingredients-list">2 cups leftover stuffing</li>
                        <li className = "Ingredients-list">2 eggs</li>
                        <li className = "Ingredients-list">0.5 cup grated Parmesan cheese</li>
                        <li className = "Ingredients-list">1 teaspoon poultry seasoning</li>
                        <li className = "Ingredients-list">1 teaspoon salt</li>
                        <li className = "Ingredients-list">1 teaspoon ground black pepper</li>
                        <li className = "Ingredients-list">2 cups panko bread crumbs</li>
                        <li className = "Ingredients-list">Oil for frying</li>
                        <li className = "Ingredients-list">1 pinch sea salt</li>
                        <li className = "Ingredients-list">1 cup cranberry sauce, warmed</li>
                    </ul>
                    <p className="Steps">
                        Steps
                    </p>
                    <ol>
                        <li className = "Steps-list">Mix mashed potatoes, stuffing, eggs, Parmesan cheese, poultry seasoning, 1 teaspoon salt, and pepper together in a large bowl until well combined.</li>
                        <li className = "Steps-list">Pour panko bread crumbs into a wide shallow bowl. Form 2 tablespoonfuls of stuffing mixture into a ball. Roll in bread crumbs until well coated. Repeat with remaining stuffing mixture.</li>
                        <li className = "Steps-list">Heat oil in a deep-fryer or large saucepan to 350 degrees F (175 degrees C). Fry stuffing balls, 4 at a time, until golden brown, 6 to 8 minutes. Transfer to a cooling rack; sprinkle with sea salt.</li>
                        <li className = "Steps-list">Serve fried stuffing balls with cranberry sauce.</li>
                    </ol>
                </header>
            </div>
        );
    }
}


export default RecipePage;