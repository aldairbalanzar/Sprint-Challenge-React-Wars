import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList'
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const AppContainer = styled.div `
    max-width: 1300px;
    width 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

  const AppTitle = styled.h1 `
    width: 100%;
    color: crimson;
    font-size: 60px;
  `;

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
    <AppContainer className="App">
      <AppTitle>React Wars</AppTitle>
      <CardList data={data}/>
    </AppContainer>
  );
}

export default App;
