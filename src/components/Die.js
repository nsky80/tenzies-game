export default function Die(props){
    return (
        <div className={`die-face ${props.isHeld && "dice-held"}`}
            onClick={() => props.holdDice(props.id)}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}