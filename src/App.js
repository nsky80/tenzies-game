import './App.css';
import Die from './components/Die';
import react from 'react';
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

function App() {
	const [dice, setDice] = react.useState(allNewDice)
	const [tenzies, setTenzies] = react.useState(false)
	const [numOfTimesDiceRolled, setNumOfTimesDiceRolled] = react.useState(0);

	// This will get called whenever the state of dice changes
	react.useEffect(() => {
		// console.log("Effect Called")
		const sameValue = dice[0].value
		//  All dice are held, and all dice have the same value
		if (dice.every(die => die.isHeld && die.value === sameValue)) {
			setTenzies(true)
			console.log("You won! by using " + numOfTimesDiceRolled + " rolls")
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
			// resetting all parameters to start the game again
			setDice(allNewDice())
			setTenzies(false)
			setNumOfTimesDiceRolled(0);
		} else {
			// roll only those dice which are not held
			setDice(oldDice => oldDice.map(
				x => (
					x.isHeld ? { ...x } : { ...x, value: Math.floor((Math.random() * 6) + 1) }
				)
			))
			// increment the couter
			setNumOfTimesDiceRolled(oldCount => oldCount + 1)
		}
	}

	/**
	 * This is called whenever user click on dice and flips the color.
	 * @param {} id 
	 */
	function holdDice(id) {
		// console.log(id)
		// if user held the dice then it changes the state
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
			<h3>{tenzies && `You won! you have taken ${numOfTimesDiceRolled} rolls!`}</h3>
		</main>
	);
}

export default App;
