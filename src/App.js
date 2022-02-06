import './App.css';
import Die from './components/Die';
import react from 'react';
/**
 * Challenge: Create a `Roll Dice` button that will re-roll
 * all 10 dice
 * 
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
 */
function App() {

	function allNewDice() {
		const randomDice = []
		for (var i = 0; i < 10; i++) {
			randomDice.push(Math.floor((Math.random() * 6) + 1)
			)
		}
		return randomDice
	}

	const [dice, setDice] = react.useState(allNewDice)

	const diceElements = dice.map(num => <Die value={num} />)

	function rollDice(){
		setDice(allNewDice)
	}

	return (
		<main>

			<div className="dice-container">
				{diceElements}
			</div>
			<button 
			className='roll-button'
			onClick={rollDice}
			>Roll</button>

		</main>
	);
}

export default App;
