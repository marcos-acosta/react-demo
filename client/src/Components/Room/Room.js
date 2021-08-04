import { useState, useEffect } from "react"

export default function Room(props) {
  const [counter, setCounter] = useState(0);
  const [whatever, setWhatever] = useState("");

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  useEffect(() => {
    console.log(`count updated to ${counter}`);
    console.log(`whatever is ${whatever}`);
  }, [counter]);

  useEffect(() => {
    console.log('the component mounted');
  }, []);

  return (
    <>
      <div>
        This is the room room! The room code is {props.match.params.room_code}!
        <br />
        The username from props is {props.username}.
      </div>
      <button onClick={incrementCounter}>update counter</button>
      <br />
      {counter}
    </>
  )
}