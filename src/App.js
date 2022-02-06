import './App.css';
import Die from './components/Die';
import react from 'react';
/**
 * Challenge:
 * 
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `allNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */
function App() {

	function allNewDice(){
		const randomDice = []
		for(var i = 0; i < 10; i++){
			randomDice.push(Math.floor((Math.random() * 6) + 1)
			)
		}
		return randomDice
	}

	const [dice, setDice] = react.useState(allNewDice)

	const diceElements = dice.map(num => <Die value={num}/>)

	return (
		<main>

			<div className="dice-container">
				{diceElements}
			</div>

		</main>
	);
}

export default App;
