import './App.css';
import Die from './components/Die';
import react from 'react';
import { nanoid } from "nanoid"

/**
 * Challenge: Update the `rollDice` function to not just roll
 * all new dice, but instead to look through the existing dice
 * to NOT role any that are being `held`.
 * 
 * Hint: this will look relatively similiar to the `holdDice`
 * function below. When creating new dice, remember to use
 * `id: nanoid()` so any new dice have an `id` as well.
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
	 * This function will change the values of all dice having isHeld property false
	 */
	function rollDice() {
		setDice(oldDice => oldDice.map(
			x => (
				x.isHeld ? { ...x } : { ...x, value: Math.floor((Math.random() * 6) + 1) }
			)
		))
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

			<h1 className="title">Tenzies</h1>
			<p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>


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
