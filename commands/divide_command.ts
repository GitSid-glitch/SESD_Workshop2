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

        if(numB === 0){
            console.log("Cannot divide by zero")
            return
        }

        const result = numA / numB

        console.log("Result:", result)

    }

}

export default DivideCommand
