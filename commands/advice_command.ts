const AdviceService = require("../services/advice_service")

class AdviceCommand{

    program
    adviceService

    constructor(program){

        this.program = program
        this.adviceService = new AdviceService()

    }

    register(){

        this.program
        .command("advice")
        .description("Get random advice")
        .option("-u, --uppercase", "Print name in uppercase")
        .action(async (options) => {

            const data = await this.adviceService.getAdvice()
    
            let advice = data.slip.advice
    
            if (options.uppercase) {
                advice = advice.toUpperCase()
            }
    
            console.log(advice)
    
        })

    }

}
export default  AdviceCommand