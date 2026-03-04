const axios = require("axios")

class GithubService{

    async getUser(username){

        const res = await axios.get(
            `https://api.github.com/users/${username}`
        )

        return res.data

    }

}

module.exports = GithubService
export {}