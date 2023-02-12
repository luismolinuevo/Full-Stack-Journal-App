import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className='container'>
          <div className='homeMain'>
            <h1>Worlds Best Journal and Mood tracker</h1>
            <p>
              This app allows you to create journal entries and track your mood at the same time.
              Allowing for better day to day reflection and expressing your emotions with a couple clicks.
              <div className="homeButtons">
                
              </div>
            </p>

          </div>
        </div>
      </div>
    )
  }
}

export default Home;