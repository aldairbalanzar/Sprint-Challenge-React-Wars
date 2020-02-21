import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);

    useEffect(() => {
      const starWarsAPI = `https://swapi.co/api/people/`;
      axios.get(starWarsAPI)
      .then(res => {
        console.log("here are your characters, ma dude", res);
        setData(res.data.results);
      })
      .catch(err => {
        console.log("no characters...", err);
      })
    }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Card data={data}/>
    </div>
  );
}

export default App;
