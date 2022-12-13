import './App.css';
import { useState } from 'react';

function App() {  
  const [title, setTitle] = useState("");
  const [colour, setColour] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();

    alert(`title ${title}, colour ${colour}`);
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input value={title} onChange={event => setTitle(event.target.value)} type="text" placeholder='colour title'/>
        <input value={colour} onChange={event => setColour(event.target.value)} type="color"/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
