import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cities")
      .then((res) => res.json())
      .then((res) => setCities(res))
  }, []);
  return (
    <div className="App">
      <h1>Cities</h1>

      <div className='city'>
        {
          cities.map((element, index) => {
            return (
              <div className='cityd' key={index}>
                <p>{`city : ${element.name}`}</p>
                <p>{`state : ${element.state}`}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
