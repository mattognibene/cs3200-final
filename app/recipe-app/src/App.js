import { React, useState, useRef } from 'react';
//import logo from './logo.svg'
import './App.css';


function App() {
  //const [ings, setIngs] = useState([])
  const ingRef = useRef()

  //function handleIng(e) {
	//const name = ingRef.current.value
	//if (name === '') return
	//setIngs(prevIngs => {
	//	return [...prevIngs, {name: name}]
	//})
	//ingRef.current.value = null;
  //} 

  return(
	<div className="App">
		<h1>
		Recipe Generator
		</h1>
		<input ref={ingRef} type="text" />
		<button>Enter ingredients</button>
		<li>
		Ingredients Entered: Stuffing, Mashed Potatoes, Eggs, Shredded Cheddar 
		</li>
		<button>Get recipes</button>
		<li>
			Recipes Found: Stuffing Bites, Mashed Potato Muffins
		</li>
	</div>
     )
}

export default App;
