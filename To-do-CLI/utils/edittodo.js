import readlinesync from "readline-sync";
import fs from "fs";
import chalk from "chalk";
import loading from "loading-cli";
import { readFile, writefile, createUsers } from "./usercreate.js";
import Randomstring from "randomstring";

async function edittodo(){
    try {
        console.clear()

        let email = readlinesync.questionEMail("Enter your Email : ")
    while (!email) {
      email = readlinesync.questionEMail("Enter Your Mail: ");
    }
    let fileData = await readFile("../Databases/data.json");
    fileData = JSON.parse(fileData);

    let emailFound = fileData.find((ele) => ele.email == email);
    if (!emailFound) {
      console.log("User Doesn't exist. Invalid Response");
      return;
    }
    console.table(emailFound.todo);

    let todoNo = readlinesync.questionInt("Enter the task that you want to update: ")
    while (!emailFound.todo[todoNo]) {
        todoNo = readlinesync.questionInt("Enter a Valid Index that you want to update : ");
    }
    let todoName = readlinesync.question("Enter Updated Task : ");
        while (!todoName) {
            todoName = readlinesync.question("Enter a Valid Task : ");
        }

        let isCompleted = readlinesync.question("Is this Task Completed Enter (y/n)");
        while (!isCompleted) {
            isCompleted = readlinesync.question("Enter a Valid Input : ");
        }
        if (isCompleted === "y" ||
            isCompleted === "Y" ||
            isCompleted === "yes") {
            isCompleted = true
        } else {
            isCompleted = false;
        }
        let todoData = {
            todoName,
            isCompleted,
            todo_id: emailFound.todo[todoNo].todo_id
        }
        emailFound.todo[todoNo] = todoData;

        await writefile("../Databases/data.json", JSON.stringify(fileData));
        console.log(chalk.green("Task Edited Successfully"))


    } catch (error) {
        console.log(error)
        
    }
}
export default edittodo;
