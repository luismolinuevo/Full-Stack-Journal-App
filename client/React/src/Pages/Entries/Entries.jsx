import React from 'react';
import { useParams, Link } from 'react-router-dom';
import "../Entries/Entries.css";

export default function ({data}) {
  return (
    <div>
        <div className='container'>
          <div className='cardContainer'>
            {data.map((item) => (
            <div className='card'>
              <div className='cardInfo'>
                <h1>{item.title}</h1>
                <h3>{item.date}</h3>
                <p>Mood: {item.mood}</p>
                <Link to={`/entries/${item._id}`}>View More</Link>
              </div>
            </div>  
            ))}
          </div>
        </div>
    </div>
  )
}
