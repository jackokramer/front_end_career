import React from `react`
import WeatherDetails from './WeatherDetails'

// extract out the following properties from this.props.weatherData

//  main, name, sys, weather

// replace the current static values in weatherData component with the appropriate values 

// uncomment the image tag and display it after copying and pasting the weatherIcon constant

// tip - you do not need to add the "$" sign when inject variables in JSX, just use curly braces.

//<img className="weather-icon" src=${weatherIcon} alt="WeatherIcon"/>

class WeatherData extends React.Component{
    state = {
        showWeatherDetails: false
    }
    render() {
    const {main, name, sys, weather} = this.props.WeatherData
    const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return (
        <div className = "weather-data">
            <h3 className="city-name">{name}, {sys.country}</h3>
            <p className="weather-temperature">{main.temp}°C</p>
            <img className="weather-icon" src={weatherIcon} alt="WeatherIcon"/>
            <button onClick={()=> this.setState({showWeatherDetails: true})} 
            className="weather-details-button">Details</button>
            {this.state.showWeatherDetails && <WeatherDetails main={main}/>}
        </div>
    )
    }
}

export default WeatherData
