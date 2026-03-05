const chalk = require("chalk").default
class DivideCommand {

    program

    constructor(program){
        this.program = program
    }

    register(){

        this.program
        .command("divide <a> <b>")
        .description("Divide two numbers")
        .action((a, b) => {

            this.divideNumbers(a, b)

        })

    }

    divideNumbers(a, b){

        const numA = Number(a)
        const numB = Number(b)

        if(Number.isNaN(numA) || Number.isNaN(numB)){
            console.log(chalk.red("Please provide valid numbers"))
            return
        }

        if(numB === 0){
            console.log(chalk.red("Cannot divide by zero"))
            return
        }

        const result = numA / numB

        console.log("Result:", result)

    }

}

export default DivideCommand
