class AddCommand{

    program

    constructor(program){
        this.program = program
    }

    register(){

        this.program
        .command("add <a> <b>")
        .description("Add two numbers")
        .action((a,b)=>{
            this.addNumbers(a, b)

        })

    }

    addNumbers(a, b){

        const numA = Number(a)
        const numB = Number(b)

        if(Number.isNaN(numA) || Number.isNaN(numB)){
            console.log("Please provide valid numbers")
            return
        }

        const result = numA + numB

        console.log("Result:", result)

    }

}

export default AddCommand
