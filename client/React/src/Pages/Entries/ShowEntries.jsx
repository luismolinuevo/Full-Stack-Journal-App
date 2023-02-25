import React, { useEffect, useState } from 'react';
import Entries from './Entries';
import "../Entries/ShowEntries.css"

export default function ShowEntries() {
    const [entries, setEntries] = useState([]);
    const [query, setQuery] = useState([]);

    useEffect(() => {
        async function getAllEntries() {
            try {
                let response = await fetch("http://localhost:5000/api/journal", {
                    credentials: "include", 
                })

                if (!response.ok) {  //may have to change this
                    throw new Error("Failed to fetch data");    //if its not ok it will throw an error
                }

                let data = await response.json();
                setEntries(data);
                console.log(data);

            } catch(error) {
                console.log("Failed to get data")
            }
        }

        getAllEntries();
    
        return () => {
    
        };
      }, []);

      const keys = ["title", "date"];
      const search = (data) => {
          return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(query))
          );
    };
  
  return (
    <div>
      <div className='container'>
        <div className='searchBarContainer'>
          <input 
            type="search" 
            className='searchBar' 
            placeholder='Search by title or date' 
            onChange={(e) => setQuery(e.target.value.toLowerCase())} 
            />  
        </div>
      </div>
      <div>
        <Entries data={search(entries)}/>
      </div>
    </div>
  )
}
