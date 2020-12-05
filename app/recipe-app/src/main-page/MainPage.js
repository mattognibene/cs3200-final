import React, {Component} from 'react';
import './MainPage.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import RecipePage from "../recipe-page/RecipePage";

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

    addData(val) {
        // TODO: hit the API here with the array of ingredients?
        console.log("val: ", val.split(/\r?\n/));
    }

    render() {
        return(
            <div className="Main-Page">
                <h1 className="Main-Page-header">Recipe Generator</h1>
                <textarea value={this.state.ingredients} onChange={this.handleChange} rows={10} cols={20} />
                    <p>
                        <button onClick={() => this.addData(this.state.ingredients)}>
                            Enter Ingredients </button>
                    </p>
                {/*// we don't really need this part, only for debugging purposes */}
                <p className="Sub-Header">
                    Ingredients Entered:
                </p>
                <p> {this.state.ingredients} </p>
                <p>
                    <button>Get Recipes</button>
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