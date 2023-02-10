import { useState } from 'react'
import { BsEmojiSmile, BsEmojiHeartEyes, BsEmojiNeutral, BsEmojiFrown, BsEmojiAngry} from "react-icons/Bs";
import "./CreateEntries.css"


export default function CreateEntrie() {
    const [date, setDate] = useState("");
    const [mood, setMood] = useState([]);
    const [title, setTitle] = useState("");
    const [explainMood, setExplainMood] = useState("");
    const [whatHappened, setWhatHappened] = useState("");

    const[isHappy, setIsHappy] = useState(false);
    const[isInLove, setInLove] = useState(false);
    const[isMeh, setIsMeh] = useState(false);
    const[isSad, setIsSad] = useState(false);
    const[isMad, setIsMad] = useState(false);

    const happyOnClick = () => {
        // if(mood.includes("happy"))
        setIsHappy((prev) => !prev);
        if(isHappy) {
            setMood([...mood, "happy"]);
        }
        // setMood("happy")
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
                    <div className='moods'>
                        <button><BsEmojiSmile/></button>
                        <p>rad</p>
                    </div>
                    <div className='moods'>
                        <button><BsEmojiHeartEyes/></button> 
                        <p>love</p>
                    </div>
                    <div className='moods'>
                        <button><BsEmojiNeutral/></button>
                        <p>meh</p>
                    </div>
                    <div className='moods'>
                        <button><BsEmojiFrown/></button> 
                        <p>sad</p>
                    </div>
                    <div className='moods'>
                        <button><BsEmojiAngry/></button> 
                        <p>mad</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div>
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
