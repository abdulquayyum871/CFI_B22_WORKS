import readlinesync from "readline-sync";
import fs from "fs";
import c from "chalk";
import loading from "loading-cli";
import { readFile, writefile, createUsers } from "./usercreate.js";
async function getAllTodos() {
    try {
        console.clear()
    console.log(
      c.red("========================================================")
    );
    console.log(c.yellowBright.bold.italic("\t \t \t TO-DO CLI"));
  console.log(
    c.red("========================================================")
  );
  console.log(c.green("\t \t  LIST OF ALL TODO'S "));
  console.log(
    c.red("========================================================")
  );

        let email = readlinesync.questionEMail("Enter your Email : ");

        //Read File Contents from data.json
        let fileData = await readFile("data.json");
        fileData = JSON.parse(fileData);

        //Checking if User Exists
        let emailFound = fileData.find((ele) => ele.email == email);
        if (!emailFound) {
            throw ("User Doesn't exist. Invalid Response");
        }
        console.table(emailFound.todo);
     
        console.log(chalk.green("Tasks Fetched Successfully"))

    } catch (error) {
        console.error(error);
    }
}

export default getAllTodos;