import { Command } from "commander"

class CLIEngine{
    program
    constructor(){
        this.program = new Command();   
    }

    registerCommands(commands){
        commands.forEach((commandClass) =>{
            const commandInstance = new commandClass(this.program)
            commandInstance.register();
        })
    }

    run(){
        this.program.parse()
    }

}

export default CLIEngine    