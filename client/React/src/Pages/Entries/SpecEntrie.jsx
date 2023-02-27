import { useState, useEffect }from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import "../Entries/SpecEntrie.css"
import { AiFillDelete, AiFillEdit } from "react-icons/ai";


export default function SpecEntrie() {
    const [entrieData, setEntrieData] = useState([]);
    let params = useParams();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function getEntrieData() {
          try {
            let response = await fetch(`http://localhost:5000/api/journal/${params.id}` , {
                credentials: "include"
            })
    
            let data = await response.json();
            
            setEntrieData(data.entry);
            console.log(data);
            
            // return data;
            
          } catch (error) {
            
            console.error("Error fetching", error);
            setError(true);
          }
        }
    
        getEntrieData();
    
        return () => {
        };
      }, [params]);

      const deleteEntry = (e) => {
        let response = fetch(`http://localhost:5000/api/journal/${params.id}`, {
          method: "DELETE",
          credentials: "include",
          headers: {
          "Content-Type": "application/json",
          },
        }).then(navigate(`/entries`))
        if (response.ok) {
          console("Entry deleted")
        } else {
          // setError(true);
          console.log("didnt work")
        }
      
      }

  return (
    <div>
        <div className='container'>
            {
            entrieData && entrieData.length >= 1 ?  entrieData.map((data) => (
              <div className='specEntrieContainer'>
                <h1 className='heading'>{data.title}</h1>
                <div className='dateandmood'>
                  <p>{data.date}</p>
                  <p>{data.mood}</p>
                </div>
                <div className='explainedandentry'>
                  <div className='explained'>
                    <h1>My mood Explained</h1>
                    <p>{data.moodExplained}</p>
                  </div>
                  <div className='entry'>
                    <h1>What happened this day</h1>
                    <p>{data.entry}</p>
                  </div>
                </div>
                <div className='editandelbutton'>
                  <button className="deleteButton" title="delete entry" onClick={deleteEntry}><AiFillDelete className='trashCan'/>Delete Entry</button>
                  {/* <button className='editButton' title="edit entry"><AiFillEdit className='editIcon'/>Edit Entry</button> */}
                </div> 
              </div>
            )
              
            ) 
            : 
            (<p>Failed to get data</p>)
        }
        </div>
        
        
        
    </div>
  )
}
