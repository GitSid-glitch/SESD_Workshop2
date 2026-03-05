class SubtractCommand {

    program

    constructor(program){
        this.program = program
    }

    register(){

        this.program
        .command("subtract <a> <b>")
        .description("Subtract two numbers")
        .action((a, b) => {

            this.subtractNumbers(a, b)

        })

    }

    subtractNumbers(a, b){

        const numA = Number(a)
        const numB = Number(b)

        if(Number.isNaN(numA) || Number.isNaN(numB)){
            console.log("Please provide valid numbers")
            return
        }

        const result = numA - numB

        console.log("Result:", result)

    }

}

export default SubtractCommand
