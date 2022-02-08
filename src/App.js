import './App.css';
import Die from './components/Die';
import react from 'react';
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

/**
 * Challenge: Tie off loose ends!
 * 1. If tenzies is true, Change the button text to "New Game"
 * 2. If tenzies is true, use the "react-confetti" package to
 *    render the <Confetti /> component 🎉
 * 
 *    Hint: don't worry about the `height` and `width` props
 *    it mentions in the documentation.
 */
/**
 * Challenge: Allow the user to play a new game when the
 * button is clicked and they've already won
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
		if (tenzies) {
			setDice(allNewDice())
			setTenzies(false)
		} else {
			setDice(oldDice => oldDice.map(
				x => (
					x.isHeld ? { ...x } : { ...x, value: Math.floor((Math.random() * 6) + 1) }
				)
			))
		}
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
			{tenzies && <Confetti />}
			<h1 className="title">Tenzies</h1>
			<p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>


			<div className="dice-container">
				{diceElements}
			</div>
			<button
				className='roll-button'
				onClick={rollDice}
			>{tenzies ? "New Game" : "Roll"}</button>

		</main>
	);
}

export default App;
