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
            try{
                const joke = await this.jokeService.getJoke()

                console.log(joke.setup)
                console.log(joke.punchline)
            }catch(error){
                console.log("Could not fetch a joke right now")
            }

        })

    }

}

export default JokeCommand
