import React, {useState, useEffect} from "react";
import "./App.css";
import NasaCard from './NasaCard'
import axios from 'axios';
import styled from 'styled-components';
import NasaLogo from './images/NASAdark.jpg'


const MainPage = styled.div`
background-color: #121212;
color: white;
`;
const Copyright = styled.div`
font-size: 1.25rem;
margin-top: 40px;
padding-bottom: 20px;
`;
const Headline = styled.p`
  font-size: 4rem;
`;
const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
          <Head>
              <img src={NasaLogo} width="175px" alt="Nasa Logo"/>
              <Headline>Photo of the Day</Headline>
              <img src={NasaLogo} width="175px" alt="Nasa Logo"/>
          </Head>
          <NasaCard
          data={data}
          />
          <Copyright> COPYRIGHT MMXX</Copyright>
      </MainPage>
    </div>
  );
}

export default App;