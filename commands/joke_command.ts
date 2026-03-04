const JokeService = require("../services/joke_service")

class JokeCommand {

    program
    jokeService

    constructor(program){

        this.program = program
        this.jokeService = new JokeService()

    }

    register(){

        this.program
        .command("joke")
        .description("Get a random joke")
        .action(async ()=>{

            const joke = await this.jokeService.getJoke()

            console.log(joke.setup)
            console.log(joke.punchline)

        })

    }

}

export default JokeCommand
