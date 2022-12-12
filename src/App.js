import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [emotion, setEmotion] = useState("happy");

  useEffect(() =>{
    console.log(`it's ${emotion} right now `);
  }, [emotion])  
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("happy")}>Happy</button>
    </div>
  );
}

export default App;
