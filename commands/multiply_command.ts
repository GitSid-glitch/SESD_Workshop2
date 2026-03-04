class MultiplyCommand {

    program

    constructor(program){
        this.program = program
    }

    register(){

        this.program
        .command("multiply <a> <b>")
        .description("Multiply two numbers")
        .action((a, b) => {

            this.multiplyNumbers(a, b)

        })

    }

    multiplyNumbers(a, b){

        const result = Number(a) * Number(b)

        console.log("Result:", result)

    }

}

export default MultiplyCommand
