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

        const result = Number(a) - Number(b)

        console.log("Result:", result)

    }

}

export default SubtractCommand
