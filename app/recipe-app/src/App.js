import { React, useState, useRef } from 'react';
//import logo from './logo.svg'
//import './App.css';


function App() {
  //const [ings, setIngs] = useState([])
  //const ingRef = useRef()

  //function handleIng(e) {
	//const name = ingRef.current.value
	//if (name === '') return
	//setIngs(prevIngs => {
	//	return [...prevIngs, {name: name}]
	//})
	//ingRef.current.value = null;
  //} 

  return(
	<>
		<h1>Recipe Generator</h1>
		<input type="text" />
		<button>Enter ingredients</button>
		<e1>
			Ingredients Entered: 
		</e1>
		<e2> Stuffing, Mashed Potatoes, Eggs </e2>
		<button>Get Recipes</button>
		<e3>Recipes Found: Stuffing Bites</e3>
	</>
     )
}

export default App;
