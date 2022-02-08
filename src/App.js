import './App.css';
import Die from './components/Die';
import react from 'react';
import { nanoid } from "nanoid"

/**
 * Challenge: Update the `holdDice` function to flip
 * the `isHeld` property on the object in the array
 * that was clicked, based on the `id` prop passed
 * into the function.
 * 
 * Hint: as usual, there's > 1 way to accomplish this.
 * I'll be using `dice.map()` and checking for the `id`
 * of the die to determine which one to flip `isHeld` on,
 * but you can do whichever way makes the most sense to you.
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
					isHeld: false,
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
	 * This is called whenever user click on dice and flips the color.
	 * @param {} id 
	 */
	function holdDice(id) {
		console.log(id)
		setDice(oldDice => oldDice.map(x => (
			x.id === id ? { ...x, isHeld: !x.isHeld } : { ...x }
		)))
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
