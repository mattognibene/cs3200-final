import React, {Component} from 'react';
import './MainPage.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import RecipePage from "../recipe-page/RecipePage";
import NetworkModule from "../NetworkModule";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ingredients: event.target.value});
    }

    getRecipes(val) {
        const listOfIngredients = val.split(/\r?\n/);
        console.log(listOfIngredients)
        NetworkModule.getRecipes(listOfIngredients).then(r => console.log(r));
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
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/recipe-page"
                                    className="Recipes-found">Stuffing Bites</Link>
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/recipe-page">
                                <RecipePage />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}


export default MainPage;