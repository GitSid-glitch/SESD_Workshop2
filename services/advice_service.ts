const axios = require("axios")

class AdviceService{

    async getAdvice(){

        const res = await axios.get("https://api.adviceslip.com/advice")

        return res.data

    }

}

module.exports = AdviceService
export {}