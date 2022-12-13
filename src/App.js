import './App.css';
import { Link } from 'react-router-dom';

export function App() {  

  return ( 
    <div>
    <h1>My Website</h1>
    <Link to="/github">Github</Link>
    <br/>
    <Link to="/graphql">GraphQL</Link>
    </div>
  )
};
