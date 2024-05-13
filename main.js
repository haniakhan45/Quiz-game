#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellow("\n\tWelcome To Quiz Game\n"));
async function startQuiz() {
    let ans = await inquirer.prompt([
        {
            name: "queNo1",
            type: "list",
            message: "What does AI stand for?",
            choices: [
                "Automated Inference",
                "Advanced Integration",
                "Artificial Intelligence",
                "Autonomous Interaction",
            ],
        },
        {
            name: "queNo2",
            type: "list",
            message: "Which programming language is commonly used for developing AI applications??",
            choices: ["Java", "Python", "C++", "Ruby"],
        },
        {
            name: "queNo3",
            type: "list",
            message: "Which of the following is an example of a famous AI chatbot?",
            choices: ["Alexa", "Siri", "Cortana", "All of the above"],
        },
        {
            name: "queNo4",
            type: "list",
            message: "Which type of AI system is designed to perform a specific task, such as playing chess or recognizing speech?",
            choices: ["General AI", "Narrow AI", "Strong AI", "Weak AI"],
        },
        {
            name: "queNo5",
            type: "list",
            message: "Which of the following is not a subfield of artificial intelligence?",
            choices: [
                "Natural Language Processing (NLP)",
                "Robotics",
                "Virtual Reality (VR)",
                "Computer Vision",
            ],
        },
    ]);
    if (ans.queNo1 == "Artificial Intelligence") {
        console.log(chalk.green.bold("'Q1' Correct Answer"));
    }
    else {
        console.log(chalk.red.bold("'Q1' Incorrect Answer"));
    }
    if (ans.queNo2 == "Python") {
        console.log(chalk.green.bold("'Q2' Correct Answer"));
    }
    else {
        console.log(chalk.red.bold("'Q2' Incorrect Answer"));
    }
    if (ans.queNo3 == "All of the above") {
        console.log(chalk.green.bold("'Q3' Correct Answer"));
    }
    else {
        console.log(chalk.red.bold("'Q3' Incorrect Answer"));
    }
    if (ans.queNo4 == "Narrow AI") {
        console.log(chalk.green.bold("'Q4' Correct Answer"));
    }
    else {
        console.log(chalk.red.bold("'Q4' Incorrect Answer"));
    }
    if (ans.queNo5 == "Virtual Reality (VR)") {
        console.log(chalk.green.bold("'Q5' Correct Answer"));
    }
    else {
        console.log(chalk.red.bold("'Q5' Incorrect Answer"));
    }
    let userComfirm = await inquirer.prompt([
        {
            name: "ans",
            type: "confirm",
            message: "Do you want to continue?",
        },
    ]);
    if (userComfirm.ans) {
        startQuiz();
    }
    else {
        console.log(chalk.yellow.bold(`\n\tThanks for using my Quiz App..`));
    }
}
startQuiz();
