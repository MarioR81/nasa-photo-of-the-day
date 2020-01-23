import React, {useState, useEffect} from "react";
import "./App.css";
import NasaCard from './NasaCard'
import axios from 'axios';
import styled from 'styled-components';


const MainPage = styled.div`
background-color: #121212;
color: white;
`;
const Copyright = styled.div`
font-size: 1.25rem;
margin-top: 40px;
margin-bottom: 20px;
`;
const NasaLogo = styled.img`
width: 100px;
`;


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => {
      setData(response.data)
    console.log(response.data);
    })
    .catch(error => {
    console.log('Data not retured', error);
    })
}, [])

  return (
    <div className="App">
      <MainPage>
          <NasaLogo src="../images/nasalogo.png" />
          <p>LOGO placeholder - NASA Photo of the Day</p>
          <NasaCard
          data={data}
          />
          <Copyright> COPYRIGHT MMXX</Copyright>
      </MainPage>
    </div>
  );
}

export default App;