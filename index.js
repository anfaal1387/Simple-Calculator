import inquirer from "inquirer";
//Asking questions from users through inquirer
let answers = await inquirer.prompt([
    { message: "Entre your first Number", type: "number", name: "firstNumber" },
    { message: "Entre your second Number", type: "number", name: "secondNumber" },
    {
        message: "Select any one opertaion to perform operations!",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multipliction", "Division"],
    },
]);
//conditional statements if else
if (answers.Operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.Operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.Operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.Operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
