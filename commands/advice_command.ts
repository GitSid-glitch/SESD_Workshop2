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
        .action(async ()=>{

            const data = await this.adviceService.getAdvice()

            console.log(data.slip.advice)

        })

    }

}
export default  AdviceCommand