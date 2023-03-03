import { useState } from 'react'
import { BsEmojiSmile, BsEmojiHeartEyes, BsEmojiNeutral, BsEmojiFrown, BsEmojiAngry} from "react-icons/bs";
import "./CreateEntries.css"
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.API_URL ||"http://localhost:5000"


export default function CreateEntrie() {
    const [date, setDate] = useState("");
    const [mood, setMood] = useState([]);
    const [title, setTitle] = useState("");
    const [explainMood, setExplainMood] = useState("");
    const [whatHappened, setWhatHappened] = useState("");

    const navigate = useNavigate();

    const moodHandler = (emotion) => { //emotion could be "happy", "sad", "rad", etc
        const moodFound = mood.includes(emotion);  
        if(!moodFound) {
            setMood([...mood, emotion]);
            console.log("added");

        } else {
            setMood(mood.filter(word => word !== emotion));  //needs more testing
            console.log("removed")
        }
        console.log(mood);
    }

    const sumbitForm = async (event) => {
        event.preventDefault();
        let response = await fetch(API_URL, {
            method: "POST",
            credentials: "include",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            entry: whatHappened,
            date: date,
            mood: mood,
            moodExplained: explainMood,
        }),
      }).then((navigate(`/entries`)))

      if (response.ok) {
        // setSuccess(true);
        console.log("work")
      } else {
        // setError(true);
        console.log("didnt work")
      }
    };

  return (
    <div>
        <div className='container'>
            <h1 className='heading'>Create Entrie</h1>
            <div className='topHalf'>
                <div className='datePicker'>
                    <h1 className='entrieHeading'>Date:</h1>
                    <input type="date" 
                    value={date}
                    onChange={event => {setDate(event.target.value)}}
                    className = "inputBox"
                    />
                </div>
                <div className="moodPicker">
                    <h1 className='entrieHeading'>Mood:</h1>
                    <div className='moodEmjois'>
                        <div className = {mood.includes("rad ") ? "moods selected" : "moods"}>
                            <button onClick={() => moodHandler("rad ")}
                            >
                                <BsEmojiSmile className="moodButton"/>
                            </button>
                            <p>rad</p>
                        </div>
                        <div className = {mood.includes("love ") ? "moods selected" : "moods"}>
                            <button onClick={() => moodHandler("love ")}><BsEmojiHeartEyes className="moodButton"/></button> 
                            <p>love</p>
                        </div>
                        <div className = {mood.includes("meh ") ? "moods selected" : "moods"}>
                            <button onClick={() => moodHandler("meh ")}><BsEmojiNeutral className="moodButton"/></button>
                            <p>meh</p>
                        </div>
                        <div className = {mood.includes("sad ") ? "moods selected" : "moods"}>
                            <button onClick={() => moodHandler("sad ")}><BsEmojiFrown className="moodButton"/></button> 
                            <p>sad</p>
                        </div>
                        <div className = {mood.includes("mad ") ? "moods selected" : "moods"}>
                            <button onClick={() => moodHandler("mad ")}><BsEmojiAngry className="moodButton"/></button> 
                            <p>mad</p>
                        </div>
                    </div>
                </div>
                <div className='titleContainer'>
                    <h1 className='entrieHeading'>Title:</h1>
                    <input type="text" value={title} placeholder="Enter title"  className = "inputBox" onChange={event => {setTitle(event.target.value)}} autoFocus/>
                </div>
            </div>
            <form onSubmit={sumbitForm} className="bottomHalf">
                <div>
                    <h1 className='entrieHeading2'>Explain your mood</h1>
                    <textarea type="text" value={explainMood} placeholder='Explain your selected mood' className='textarea' onChange={event => {setExplainMood(event.target.value)}}/>
                </div>
                <div>
                    <h1 className='entrieHeading2'>What happened Today?</h1>
                    <textarea type="text" value={whatHappened} placeholder='What happened Today?' className='textarea' onChange={event => {setWhatHappened(event.target.value)}}/>
                </div>
                <button type="submit" className='submitButton'>Submit</button>
            </form>
        </div>
    </div>
  )
}
