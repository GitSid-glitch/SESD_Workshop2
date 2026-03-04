const chalk = require("chalk").default
class GreetCommand{
    program;

    constructor(program){
        this.program = program
    }

    register(){
        this.program.command("greet <name>")
        .action((name) => {
            this.greetName(name)
        })
    }

    greetName(name){
        console.log(chalk.green(`Hello ${name}`))
    }
}

export default GreetCommand
