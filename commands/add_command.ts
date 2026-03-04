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

            const result = Number(a) + Number(b)

            console.log("Result:", result)

        })

    }

}

module.exports = AddCommand