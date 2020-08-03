import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Header from "./components/Header"
import WeatherSearch from "./components/WeatherSearch"
//import App from './App';
//import * as serviceWorker from './serviceWorker';


class App extends React.Component {
  api_call = async () =>{
    const API_KEY = "9c3cb98520f309bd159e77512e8e5e28"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`
    const request = await fetch(url)
    const response = await request.json()
    console.log(`success!`)
  }
  render(){
    return(
      <>
        <Header />
        <WeatherSearch />
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById(`root`))