#!/usr/bin/env node
const cli_engine = require("./CLI_Engine/cli_engine")

const greet_command = require("./commands/greet_command")
const AddCommand = require("./commands/add_command")
const SubtractCommand = require("./commands/subtract_command")
const MultiplyCommand = require("./commands/multiply_command")
const DivideCommand = require("./commands/divide_command")

const JokeCommand = require("./commands/joke_command")
const QuoteCommand = require("./commands/quote_command")
const WeatherCommand = require("./commands/weather_command")
const GithubCommand = require("./commands/github_command")

const FileInfoCommand = require("./commands/fileinfo_command")
const InitTSCommand = require("./commands/init_ts")

const engine = new cli_engine()

engine.registerCommands([
    greet_command,
    AddCommand,
    SubtractCommand,
    MultiplyCommand,
    DivideCommand,
    JokeCommand,
    QuoteCommand,
    WeatherCommand,
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