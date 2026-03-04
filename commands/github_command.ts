const GithubService = require("../services/github_service")

class GithubCommand{

    program
    githubService

    constructor(program){

        this.program = program
        this.githubService = new GithubService()

    }

    register(){

        this.program
        .command("github <username>")
        .description("Get GitHub user info")
        .action(async (username)=>{

            const user = await this.githubService.getUser(username)

            console.log("Name:", user.name)
            console.log("Repos:", user.public_repos)
            console.log("Followers:", user.followers)

        })

    }

}

module.exports = GithubCommand
export {}