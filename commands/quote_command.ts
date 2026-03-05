const QuoteService = require("../services/quote_service")

class QuoteCommand{

    program
    quoteService

    constructor(program){

        this.program = program
        this.quoteService = new QuoteService()

    }

    register(){

        this.program
        .command("quote")
        .description("Get motivational quote")
        .action(async ()=>{
            try{
                const quote = await this.quoteService.getQuote()

                console.log(`"${quote.content}"`)
                console.log(`— ${quote.author}`)
            }catch(error){
                console.log("Could not fetch a quote right now")
            }

        })

    }

}

export default QuoteCommand
