import './App.css';
import Die from './components/Die';
/**
 * Challenge:
 * 
 * Write a function (allNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
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

	const dice = allNewDice().map(num => <Die value={num}/>)

	return (
		<main>

			<div className="dice-container">
				{dice}
			</div>

		</main>
	);
}

export default App;
