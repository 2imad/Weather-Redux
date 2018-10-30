import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMaps from '../components/google.map'

class WeatherList extends Component {

    renderWeather(cityData) {
        const {population } = cityData.city
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        const { lon , lat  } = cityData.city.coord       
        return (
            <tr key={population} >
                <td >
                    <GoogleMaps lon={lon} lat={lat} />
                </td>
                <td><Chart data={temps} color='orange' units='K' /></td>
                <td><Chart data={pressures} color='red' units='hpa' /></td>
                <td><Chart data={humidities} color='green' units="%" /></td>

            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure () </th>
                        <th>Humidity (%) </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList)