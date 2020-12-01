import React from 'react';
import Ing from './Ing'

function IngList(props) {
  return (
	<div> 
	{props.ings.map(i =>
		<Ing key={i.name} name={i.name} />)}
	</div>
  )	
}

export default IngList;
