import React, { useState } from 'react';
import BackgroundImage from '../images/1.jpg'
import axios from 'axios'

const Home = () => {
    const [city, setCity] = useState("")
    const [skinTone, setSkinTone] = useState("Pale Skin")
    const [uvIndex, setuvIndex] = useState(null)
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const handleSkinToneChange = (e) => {
        setSkinTone(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        getUvIndex()
    }

    const getUvIndex = async () => {
        const coordinatesData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=25200fc48b4d79ae7ee3d1d9faae1df7`)
        const coord = coordinatesData.data.coord
        // console.log(coord)
        const uvData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,hourly,daily,alerts&appid=25200fc48b4d79ae7ee3d1d9faae1df7`)
        const currentUvData = uvData.data.current
        console.log(currentUvData.uvi)
        setuvIndex(currentUvData.uvi)
    }

    return (
        <>
            <div className="home-container" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            </div>
            <div className="home-description">
                Going on a trip and want to plan accordingly? How much sunscreen should you bring? How long should you be in the sun for to get the ultimate tan? This app does all the heavy lifting for you. Utilizng various UV indexes and calculations, we are able to calculate the most optimal amount of time for you to be in the sun. All you have to do is input your skin tone and city name below. Then the calculations will be made, and you will be provided with a tailored breakdown of your results.
            </div>
            <div className="home-uvsearch">
                <div className="home-form-container">
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-header">
                            <h3>Input Your City</h3>
                        </div>
                        <div className="form-control">
                            <input onChange={handleCityChange} type="text" />
                        </div>
                        <div className="form-header">
                            <h3>Select Your Skintone</h3>
                        </div>
                        <div className="form-control">
                            <select onChange={handleSkinToneChange}>
                                <option>
                                    Pale Skin
                                </option>
                                <option>
                                    Olive Skin
                                </option>
                                <option>
                                    Dark Skin
                                </option>
                            </select>
                        </div>
                        <div className="form-control">
                            <button>Get Local UV Data</button>
                        </div>
                    </form>
                    <div>
                        {uvIndex} {skinTone}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;