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

        const numA = Number(a)
        const numB = Number(b)

        if(Number.isNaN(numA) || Number.isNaN(numB)){
            console.log("Please provide valid numbers")
            return
        }

        const result = numA * numB

        console.log("Result:", result)

    }

}

export default MultiplyCommand
