const axios = require("axios")

class WeatherService{

    async getWeather(city){

        const res = await axios.get(
            `https://wttr.in/${city}?format=j1`
        )

        return res.data

    }

}

module.exports = WeatherService
export {}