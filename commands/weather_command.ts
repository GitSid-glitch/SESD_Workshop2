const WeatherService = require("../services/weather_service")

class WeatherCommand{

    program
    weatherService

    constructor(program){

        this.program = program
        this.weatherService = new WeatherService()

    }

    register(){

        this.program
        .command("weather <city>")
        .description("Get weather of a city")
        .action(async (city)=>{

            const data = await this.weatherService.getWeather(city)

            const temp = data.current_condition[0].temp_C

            console.log(`Temperature in ${city}: ${temp}°C`)

        })

    }

}

module.exports = WeatherCommand
export {}