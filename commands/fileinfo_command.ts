const fs = require("fs")

class FileInfoCommand{

    program

    constructor(program){
        this.program = program
    }

    register(){

        this.program
        .command("fileinfo <filename>")
        .description("Get file info")
        .action((filename)=>{

            const stats = fs.statSync(filename)

            console.log("Size:", stats.size)
            console.log("Created:", stats.birthtime)
            console.log("Modified:", stats.mtime)

        })

    }

}

module.exports = FileInfoCommand
export {}