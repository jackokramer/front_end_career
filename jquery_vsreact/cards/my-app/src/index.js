import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Container from '/.components/Container'
import Header from "./components/Header"
import WeatherSearch from "./components/WeatherSearch"
import WeatherData from "./components/WeatherData"
import WeatherDetails from '../components/WeatherDetails';
import ErrorMessage from './components/ErrorMessage';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


class App extends React.Component {
  state = {
    weather: null,
    showError: false
  }
  api_call = async (e) =>{
      e.preventDefault()
      const location = e.target.elements.location.value;
      if(location){      
        const API_KEY = ""
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const request = await fetch(url)
        const response = await request.json()
        // never directly manipulate the state like EX this.state.weather = response NOOOO
        this.setState({weather: response, showError: false})//instead 
    } else {
      return this.setState({showError: true, weather: null})
    }
  }
  render(){
    return(
      <Container>
        <Header />
        <WeatherSearch api_call={this.api_call}/>
        { this.state.weather && <WeatherData weatherData={this.state.weather}/>}
        <WeatherDetails />
        { this.state.showError && <ErrorMessage />}
      </Container>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById(`root`))