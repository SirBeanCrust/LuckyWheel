import React, { useState } from 'react';
import { mdiArrowLeft } from '@mdi/js';
import MyComponent4 from './get.jsx';


function App() {
  const [winners, setWinners] = useState([]);
  const [names, setNames] = useState(["Anna", "Bella", "Charlie", "David", "Emil", "Fredrik", "Gent"]);

  function addName() {
    const name = document.getElementById('input').value;
    if (name) {
      setNames([...names, name]);
      document.getElementById('input').value = '';
    }
  }

  function genRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function spinWheel() {
    if (names.length > 0) {
      const wheel = document.getElementById('animatedElement');
      const randomIndex = genRandomInt(0, names.length);
      const winner = names[randomIndex]
      document.documentElement.style.setProperty('--winner-index', `${randomIndex}`);

      wheel.classList.add('animated');

      wheel.addEventListener('animationend', function() {
        wheel.classList.remove('animated');
        
      setWinners([...winners, winner]);
      setNames(names.filter(name => name !== winner));
      }, { once: true });
      
    }
   
  }

  function delNames() {
    setNames([]);
  }

  function Switch() {
    const switchState = "winners"
    switch (switchState) {
      case "winners":
        return (
          <div>
            {winners && (
            <ul>
              {winners.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          )}
          </div>
        );

      case "names":
        return (
          <div>
      {names && (
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
      </div>
        );
        default:
      return null;
    }
  }

  function updateRotation(degrees) {
    document.documentElement.style.setProperty('--sector-size', `${degrees}deg`);
  }

  function updateRotation1(degrees) {
    document.documentElement.style.setProperty('--rotation1', `${degrees}deg`);
  }
  
  // Example usage: Update sectorSize to 90 degrees
  const sectorSize = 360/names.length;
  updateRotation(sectorSize);
  updateRotation1(180 - (sectorSize/2));
  
  function DynamicSectors() {
    
    const sectors = [];
    for (let i = 0; i < names.length; i++) {
      const calculatedRotation = 180 - (sectorSize / 2) + (sectorSize * i);
      sectors.push(
        <div className="container1" key ={i}>
          
          <div className="masked-container" style={{ transform: `rotate(${calculatedRotation}deg)` }}>
            <div className="sector" style={{ transform: `rotate(${sectorSize}deg)`,  backgroundColor: `hwb(${-1 + sectorSize  * i} 5% 34%)` }} >
            </div>
          </div>

          <div className="container" style={{ transform: `rotate(${i * 360 / names.length }deg)` }}>
            <p className="sector-text">{names[i]}</p>
          </div>
       </div>
      );
      }
  
    return <div className="container">{sectors}</div>;
  }
  function Arrow(mdiArrowLeft) {
    return
   ( <div>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d={mdiArrowLeft} fill="white" />
      </svg>
    </div>);
  }
  /**/
  return (
    
    <div className="App">
      <div>
       <Arrow/>
      <h2>Lucky Wheel</h2>
      
     <div className="container">
      
      <div className="arrow">
      
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d={mdiArrowLeft} fill="white" />
      </svg>
    
        </div>
      

     <div id="animatedElement" className="container1">
        <DynamicSectors/>
      </div>

     </div>
      
{/* 
 <div className="container">

      <div className="masked-container" >
            <div className="sector">
            </div>
      </div>

      </div>
      */}
     
     
    </div>
      
      <div>
        <input type="text" id="input" placeholder="Enter a name" />
        <button onClick={addName}>Add Name</button>
      </div>
      <div>
        <button onClick={spinWheel}>Spin the Wheel</button>
      </div>
      <div>
        <button onClick={delNames}>Delete</button>
      </div>
      <div>
        <button onClick={Switch}>Swap</button>
      </div>
    
      <Switch/>
      <MyComponent4/>
    </div>
  );
}

export default App;


