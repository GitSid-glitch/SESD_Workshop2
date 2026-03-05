const {execSync} = require("child_process")
const fs = require("fs")
const path = require("path")

class Init_TS{
    program

    constructor(program){
        this.program = program
    }

    register(){
        this.program
        .command("init-ts <foldername>")
        .description("Create a new TypeScript starter project")
        .action((foldername) => {
            this.InitializeTS(foldername)
        })
    }

    InitializeTS(foldername){
        if(!this.isValidFolderName(foldername)){
            console.log("Please provide a valid folder name")
            return
        }

        const targetPath = path.resolve(foldername)

        if(fs.existsSync(targetPath)){
            console.log("That folder already exists")
            return
        }

        try{
            fs.mkdirSync(targetPath)
            this.run("npm init -y", targetPath)
            this.run("npm install -D typescript ts-node nodemon", targetPath)
            this.run("npx tsc --init", targetPath)
            fs.writeFileSync(path.join(targetPath, "index.ts"), "")
            console.log(`TypeScript project created in ${foldername}`)
        }catch(error){
            console.log("Failed to initialize TypeScript project")
        }
    }

    isValidFolderName(foldername){
        if(!foldername || typeof foldername !== "string"){
            return false
        }

        return /^[a-zA-Z0-9._-]+$/.test(foldername)
    }

    run(command, cwd){
        execSync(command, {stdio: "inherit", cwd})
    }
}


export default Init_TS
