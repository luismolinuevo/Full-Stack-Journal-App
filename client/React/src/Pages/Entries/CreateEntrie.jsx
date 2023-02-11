import { useState } from 'react'
import { BsEmojiSmile, BsEmojiHeartEyes, BsEmojiNeutral, BsEmojiFrown, BsEmojiAngry} from "react-icons/Bs";
import "./CreateEntries.css"


export default function CreateEntrie() {
    const [date, setDate] = useState("");
    const [mood, setMood] = useState([]);
    const [title, setTitle] = useState("");
    const [explainMood, setExplainMood] = useState("");
    const [whatHappened, setWhatHappened] = useState("");

    // const[isHappy, setIsHappy] = useState(false);
    // const[isInLove, setInLove] = useState(false);
    // const[isMeh, setIsMeh] = useState(false);
    // const[isSad, setIsSad] = useState(false);
    // const[isMad, setIsMad] = useState(false);

    const moodHandler = (emotion) => { //emotion could be "happy", "sad", "rad", etc
        const moodFound = mood.includes(emotion);
        if(!moodFound) {
            setMood([...mood, emotion]);
            console.log("added");

        } else {
            setMood(mood.filter(word => word !== emotion));
            console.log("removed")
        }
        console.log(mood);
    }

    const sumbitForm = () => {

    }

  return (
    <div>
        <h1 className='heading'>Create Entrie</h1>
        <div className='topHalf'>
            <div className='datePicker'>
                <input type="date" 
                value={date}
                onChange={event => {setDate(event.target.value)}}
                />
            </div>
            <div className="moodPicker">
                <h1>Mood:</h1>
                <div className='moodEmjois'>
                    <div className = {mood.includes("rad") ? "moods selected" : "moods"}>
                        <button onClick={() => moodHandler("rad")}
                        >
                            <BsEmojiSmile/>
                        </button>
                        <p>rad</p>
                    </div>
                    <div className = {mood.includes("love") ? "moods selected" : "moods"}>
                        <button onClick={() => moodHandler("love")}><BsEmojiHeartEyes/></button> 
                        <p>love</p>
                    </div>
                    <div className = {mood.includes("meh") ? "moods selected" : "moods"}>
                        <button onClick={() => moodHandler("meh")}><BsEmojiNeutral/></button>
                        <p>meh</p>
                    </div>
                    <div className = {mood.includes("sad") ? "moods selected" : "moods"}>
                        <button onClick={() => moodHandler("sad")}><BsEmojiFrown/></button> 
                        <p>sad</p>
                    </div>
                    <div className = {mood.includes("mad") ? "moods selected" : "moods"}>
                        <button onClick={() => moodHandler("mad")}><BsEmojiAngry/></button> 
                        <p>mad</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='titleContainer'>
            <h1>Title:</h1>
            <input type="text" value={title} placeholder="Enter title"  onChange={event => {title(event.target.value)}}/>
        </div>
        <div>
            <h1>Explain your mood</h1>
            <textarea type="text" value={explainMood} placeholder='Explain your selected mood'  onChange={event => {explainMood(event.target.value)}}/>
        </div>
        <div>
            <h1>What happened Today?</h1>
            <textarea type="text" value={whatHappened} placeholder='What happened Today?'  onChange={event => {whatHappened(event.target.value)}}/>
        </div>
        <input type="submit" onClick={sumbitForm}/>
    </div>
  )
}
