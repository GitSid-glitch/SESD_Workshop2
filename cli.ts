#!/usr/bin/env node
import CLIEngine from "./CLI_Engine/cli_engine"


import GreetCommand from "./commands/greet_command"
import AddCommand from "./commands/add_command"
import SubtractCommand from "./commands/subtract_command"
import MultiplyCommand from "./commands/multiply_command"
import DivideCommand from "./commands/divide_command"

import JokeCommand from "./commands/joke_command"
import QuoteCommand from "./commands/quote_command"
import AdviceCommand from "./commands/advice_command"

import GithubCommand from "./commands/github_command"

import FileInfoCommand from "./commands/fileinfo_command"
import InitTSCommand from "./commands/init_ts"

const engine = new CLIEngine()

engine.registerCommands([
    GreetCommand,
    AddCommand,
    SubtractCommand,
    MultiplyCommand,
    DivideCommand,
    JokeCommand,
    QuoteCommand,
    AdviceCommand,
    GithubCommand,
    FileInfoCommand,
    InitTSCommand
])

engine.run()


// const {Command} = require('commander');
// const program = new Command();

// program
//     .command("greet <name>")
//     .action((name) => {
//         console.log(`Hello ${name}`)
// })

// program
//   .command("add <a> <b>")
//   .action((a, b) => {
//     console.log(Number(a) + Number(b));
//   });

// program
//   .command("subtract <a> <b>")
//   .action((a, b) => {
//     console.log(Number(a) - Number(b));
//   });

// program
//   .command("multiply <a> <b>")
//   .action((a, b) => {
//     console.log(Number(a) * Number(b));
//   });

// program
//   .command("divide <a> <b>")
//   .action((a, b) => {
//     if (Number(b) === 0) {
//       console.log("Cannot divide by zero");
//       return;
//     }
//     console.log(Number(a) / Number(b));
//   });


// program
//   .command("jokes")
//   .action(async() => {
//     try{
//         const res = await axios.get(`https://official-joke-api.appspot.com/random_joke`)
//         console.log(res.data)
//     }catch(err){
//       console.error("Error:", err);
//     }
//   })





// program.parse()