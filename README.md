# MyCLI – Custom Node.js CLI Tool

A custom Command Line Interface (CLI) tool built using **Node.js, TypeScript, and Commander.js**.  
This project demonstrates Object-Oriented Programming concepts and integrates multiple APIs to provide useful terminal commands.

---

# Features

- Built using **Node.js + TypeScript**
- Uses **Commander.js** for CLI command handling
- Follows **Object-Oriented Programming (OOP)** design
- Modular structure with **separate command classes**
- Multiple **API integrations**
- Easy to extend with new commands

---

# Project Structure

```
SESD_2
│
├── CLI_Engine
│   └── cli_engine.ts
│
├── commands
│   ├── greet_command.ts
│   ├── add_command.ts
│   ├── subtract_command.ts
│   ├── multiply_command.ts
│   ├── divide_command.ts
│   ├── joke_command.ts
│   ├── quote_command.ts
│   ├── github_command.ts
│   ├── advice_command.ts
│   ├── fileinfo_command.ts
│   └── init_ts.ts
│
├── services
│   ├── joke_service.ts
│   ├── quote_service.ts
│   ├── github_service.ts
│   └── advice_service.ts
│
├── cli.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

# Setup Instructions

### 1. Initialize the project

```bash
npm init -y
```

---

### 2. Install dependencies

```bash
npm install commander
```

Install development dependencies:

```bash
npm install -D typescript ts-node nodemon @types/node
```

---

### 3. Initialize TypeScript

```bash
npx tsc --init
```

---

### 4. Update `tsconfig.json`

Replace the contents with:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./",
    "module": "CommonJS",
    "target": "ES2019",
    "esModuleInterop": true
  }
}
```

---

### 5. Update `package.json`

Add the following field:

```json
"bin": {
  "mycli": "./dist/cli.js"
}
```

This allows the CLI to be used globally as `mycli`.

---

### 6. Install Node Version Manager (NVM)

Install Node 20:

```bash
nvm install 20
nvm use 20
```

---

### 7. Compile TypeScript

```bash
npx tsc
```

This will generate compiled files in the `dist` directory.

---

### 8. Link the CLI globally

```bash
npm link
```

Now the CLI can be executed using:

```bash
mycli
```

---

# Available Commands

### Greeting

```
mycli greet <name>
```

Example:

```
mycli greet Siddharth
```

Output:

```
Hello Siddharth
```

---

### Math Operations

Add numbers:

```
mycli add <a> <b>
```

Subtract numbers:

```
mycli subtract <a> <b>
```

Multiply numbers:

```
mycli multiply <a> <b>
```

Divide numbers:

```
mycli divide <a> <b>
```

---

### File Information

Displays metadata about a file.

```
mycli fileinfo <filename>
```

Example:

```
mycli fileinfo package.json
```

---

### Initialize TypeScript Project

Creates a new TypeScript project folder.

```
mycli init-ts <foldername>
```

Example:

```
mycli init-ts myProject
```

---

# API Commands

### Random Joke

```
mycli joke
```

Fetches a random joke using the **Official Joke API**.

---

### Random Quote

```
mycli quote
```

Fetches a motivational quote.

---

### GitHub User Info

```
mycli github <username>
```

Example:

```
mycli github torvalds
```

Displays public profile details.

---

### Advice 

```
mycli advice 
```

Example:

```
mycli advice
```

Displays random advices.

---

# Example Usage

```
mycli greet Siddharth
mycli add 5 10
mycli joke
mycli quote
mycli github torvalds
mycli weather Delhi
mycli fileinfo package.json
```

---

# Technologies Used

- Node.js
- TypeScript
- Commander.js
- Axios (for API calls)

---

# Author

**Siddharth Kumar Shukla**

SESD Workshop – CLI Tool Project
