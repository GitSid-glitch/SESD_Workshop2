const axios = require("axios")

class JokeService {

    async getJoke(){

        const res = await axios.get(
            "https://official-joke-api.appspot.com/jokes/random"
        )

        return res.data

    }

}

module.exports = JokeService
export {}