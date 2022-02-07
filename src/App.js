import './App.css';
import Die from './components/Die';
import react from 'react';
import { nanoid } from "nanoid"

/**
 * Challenge: Update the array of numbers in state to be
 * an array of objects instead. Each object should look like:
 * { value: <random number>, isHeld: false }
 * 
 * Making this change will break parts of our code, so make
 * sure to update things so we're back to a working state
 */
function App() {

	function allNewDice() {
		const randomDice = []
		for (var i = 0; i < 10; i++) {
			randomDice.push(
				{
					value: Math.floor((Math.random() * 6) + 1),
					isHeld: false,
					id: nanoid()
				}
			)
		}
		return randomDice
	}

	const [dice, setDice] = react.useState(allNewDice)

	const diceElements = dice.map(num => <Die key={num.id} value={num.value} />)

	function rollDice() {
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
