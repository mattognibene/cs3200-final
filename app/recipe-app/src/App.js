import React, { useState, useRef } from 'react';
//import logo from './logo.svg'
import IngList from './IngList'
//import './App.css';


function App() {
  const [ings, setIngs] = useState([])
  const ingRef = useRef()

  function handleIng(e) {
	const name = ingRef.current.value
	if (name === '') return
	setIngs(prevIngs => {
		return [...prevIngs, {name: name}]
	})
	ingRef.current.value = null;
  } 

  return(
	<div className="App">
		<header className="App-header">
			<h1 className="App Title">Welcome to our Recipe Generator</h1>
		</header>
		<input ref={ingRef} type="text" />
		<button onClick={handleIng}>Enter ingredient</button>
		<IngList ings={ings} />
		<button>Get recipes</button>
		<r1 className="Recipe1">
			Cookies and Cream Fudge
		</r1>
		<r2 className="Recipe2">
			Peanut Butter Fudge
		</r2>
	</div>
     );
}

export default App;
