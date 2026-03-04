import { Command } from "commander"

class CLIEngine{
    program
    constructor(){
        this.program = new Command();  
        this.program
            .name("mycli")
            .description("Custom CLI Tool built with Node + TypeScript")
            .version("1.0.0") 
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