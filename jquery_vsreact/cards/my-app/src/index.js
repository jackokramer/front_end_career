import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Header from "./components/Header"
import WeatherSearch from "./components/WeatherSearch"
import WeatherData from "./components/WeatherData"
import WeatherDetails from '../components/WeatherDetails';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


class App extends React.Component {
  state = {
    weather: null
  }
  api_call = async (e) =>{
      e.preventDefault()
      const API_KEY = "9c3cb98520f309bd159e77512e8e5e28"
      const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`
      const request = await fetch(url)
      const response = await request.json()
      // never directly manipulate the state like EX this.state.weather = response NOOOO
      this.setState({weather: response})//instead 
  }
  render(){
    return(
      <>
        <Header />
        <WeatherSearch api_call={this.api_call}/>
        { this.state.weather && <WeatherData weatherData={this.state.weather}/>}
        <WeatherDetails />
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById(`root`))