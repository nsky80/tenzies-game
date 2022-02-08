import './App.css';
import Die from './components/Die';
import react from 'react';
import { nanoid } from "nanoid"

/**
 * Challenge:
 * 1. Add new state called `tenzies`, default to false. It
 *    represents whether the user has won the game yet or not.
 * 2. Add an effect that runs every time the `dice` state array 
 *    changes. For now, just console.log("Dice state changed").
 */

/**
 * Challenge: Check the dice array for these winning conditions:
 * 1. All dice are held, and
 * 2. all dice have the same value
 * 
 * If both conditions are true, set `tenzies` to true and log
 * "You won!" to the console
 */


function App() {
	const [dice, setDice] = react.useState(allNewDice)
	const [tenzies, setTenzies] = react.useState(false)

	// This will get called whenever the state of dice changes
	react.useEffect(() => {
		// console.log("Effect Called")
		const sameValue = dice[0].value
		//  All dice are held, and all dice have the same value
		if (dice.every(die => die.isHeld && die.value === sameValue)) {
			setTenzies(true)
			console.log("You won!")
		}
	}, dice)


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
