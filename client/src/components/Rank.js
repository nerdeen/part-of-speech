import Button from "./Button"
import"../styling/popup.css"
const Rank = (props) => {
  console.log(props.rank)
  return (
    (props.trigger)?(
    <div className="popup">
        <div className="popup-inner">
          <h1>Your Rank :</h1>
          <h2>{props.rank}</h2>
          <Button className={"close-btn"} id="try" color={props.color}  text={"try again"} onClick={props.onClick}/>
          {props.children} 
        </div>
    </div>
    ):("")
  )
}

export default Rank