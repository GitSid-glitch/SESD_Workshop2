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

            const quote = await this.quoteService.getQuote()

            console.log(`"${quote.content}"`)
            console.log(`— ${quote.author}`)

        })

    }

}

module.exports = QuoteCommand
export {}