import React, {useState, useEffect} from "react";
import "./App.css";
import NasaCard from './NasaCard'
import axios from 'axios';

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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p>
      <p>LOGO placeholder - NASA Photo of the Day</p>
      <NasaCard
      data={data}
      />
      <div className='copyright'> COPYRIGHT MMXX</div>
    </div>
  );
}

export default App;