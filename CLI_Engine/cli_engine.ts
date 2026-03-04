const {Command} = require('commander');

class CLIEngine{
    program
    constructor(){
        this.program = new Command();   
    }

    resisterCommands(commands){
        commands.forEach((commandClass) =>{
            const commandInstance = new commandClass(this.program)
            commandInstance.register();
        })
    }

    run(){
        this.program.parse()
    }

}

module.exports = CLIEngine
