import { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import "../Entries/SpecEntrie.css"

export default function SpecEntrie() {
    const [entrieData, setEntrieData] = useState([]);
    let params = useParams();
    const [error, setError] = useState(false);

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

      
      console.log(entrieData);

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
