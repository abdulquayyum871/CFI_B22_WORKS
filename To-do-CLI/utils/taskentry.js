import readlinesync from "readline-sync";
import fs from "fs";
import c from "chalk";
import loading from "loading-cli";
import { readFile, writefile, createUsers } from "./usercreate.js";
import Randomstring from "randomstring";

async function taskentry() {
  try {

    console.clear()
    console.log(
      c.red("========================================================")
    );
    console.log(c.yellowBright.bold.italic("\t \t \t TO-DO CLI"));
  console.log(
    c.red("========================================================")
  );
  console.log(c.green("\t \t \t TASK ENTRY "));
  console.log(
    c.red("========================================================")
  );
    let email = readlinesync.questionEMail("Enter Your Mail: ");
    while (!email) {
      email = readlinesync.questionEMail("Enter Your Mail: ");
    }
    let fileData = await readFile("data.json");
    fileData = JSON.parse(fileData);

    let emailFound = fileData.find((ele) => ele.email == email);
    if (!emailFound) {
      console.log("User Doesn't exist. Invalid Response");
    } else {
      let inputs = [];

      const numOfTask = readlinesync.questionInt(
        "Enter the Number of task You want to enter:"
      );

      for (let i = 1; i <= numOfTask; i++) {
        let input = readlinesync.question(
          'Enter a TASK or type "quit" to exit: '
        );
        if (input.toLowerCase() === "quit") {
          break;
        }
        inputs.push(input);
      }
      let todoData = {
        inputs,
        isCompleted: false,
        todo_id: Randomstring.generate(8),
      };
      emailFound.todo.push(todoData);
      await writefile("data.json", JSON.stringify(fileData));
      console.log(c.green("Task Added Successfully"));
    }
  } catch (error) {
    console.log(error)
  }
}

// console.log(inputs)

// let todo = readlinesync.

// let todotask = await writefile("../Databases/data.json")

export default taskentry;
// taskentry()

