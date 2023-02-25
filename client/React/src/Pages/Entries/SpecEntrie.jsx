import { useState, useEffect }from 'react'
import { useParams } from 'react-router-dom';

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
        <div>
            {
            entrieData && entrieData.length >= 1 ?  entrieData.map((data) => (
              <p>{data.title}</p>
            )
              
            ) 
            : 
            (<p>failed</p>)
        }
        </div>
        
        
        
    </div>
  )
}
