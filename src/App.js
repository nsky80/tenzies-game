import './App.css';
import Die from './components/Die';
import react from 'react';
import { nanoid } from "nanoid"

/**
 * Challenge: Create a function `holdDice` that takes
 * `id` as a parameter. For now, just have the function
 * console.log(id).
 * 
 * Then, figure out how to pass that function down to each
 * instance of the Die component so when each one is clicked,
 * it logs its own unique ID property. (Hint: there's more
 * than one way to make that work, so just choose whichever
 * you want)
 * 
 */

function App() {
	/**
	 * This method generates an array of size 10 having 10 dice object which consist of value which is randomly
	 * generated and isHeld which is boolean and id to uniquely identify each die.
	 * @returns array of 10 random valued dice element
	 */
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

	/**
	 * This function will change the values of all dice.
	 */
	function rollDice() {
		setDice(allNewDice)
	}

	/**
	 * This is called whenever user click on dice
	 * @param {} id 
	 */
	function holdDice(id) {
		console.log(id)
		// setDice(oldArray.map(x => {...x})
	}

	const diceElements = dice.map(num => <Die key={num.id} {...num} holdDice={holdDice} />)

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
