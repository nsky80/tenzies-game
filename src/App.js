import './App.css';
import Die from './components/Die';
import react from 'react';
import { nanoid } from "nanoid"

/**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 * 
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */
function App() {

	function allNewDice() {
		const randomDice = []
		for (var i = 0; i < 10; i++) {
			randomDice.push(
				{
					value: Math.floor((Math.random() * 6) + 1),
					isHeld: true,
					id: nanoid()
				}
			)
		}
		return randomDice
	}

	const [dice, setDice] = react.useState(allNewDice)

	const diceElements = dice.map(num => <Die key={num.id} {...num} />)

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
