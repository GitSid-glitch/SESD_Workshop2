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
        .option("-u, --uppercase", "Print advice in uppercase")
        .action(async (options) => {
            try{
                const data = await this.adviceService.getAdvice()
        
                let advice = data.slip.advice
        
                if (options.uppercase) {
                    advice = advice.toUpperCase()
                }
        
                console.log(advice)
            }catch(error){
                console.log("Could not fetch advice right now")
            }
    
        })

    }

}
export default  AdviceCommand
