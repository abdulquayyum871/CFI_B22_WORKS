import readlineSync from "readline-sync";
import c from "chalk";
import fs from "fs";
import loading from "loading-cli";
import { readFile, writefile, createUsers } from "./utils/usercreate.js";
import userlogin from "./utils/userlogin.js";
import deleteuser from "./utils/deleteuser.js";
import taskentry from "./utils/taskentry.js";
import edittodo from "./utils/edittodo.js";
import getAllTodos from "./utils/getalltodo.js";
async function dislaymenu() {
  console.clear();
  console.log(
    c.red("========================================================")
  );
  console.log(c.yellowBright.bold.italic("\t \t \t TO-DO CLI"));
  console.log(
    c.red("========================================================")
  );
  console.log(c.green("\t \t \t MAIN MENU "));
  console.log(
    c.red("========================================================")
  );
  console.log(
    c.underline.cyanBright("Choose the Operation you want to Perform")
  );
  console.log(
    c.whiteBright(`
    1.User Login 
    2.User Create
    3.Delete Account
    4.Entering Task in TODO list
    5.Edit an Existing TODO list
    6.List all TODO'S`)
  );
  console.log(
    c.red("========================================================")
  );
  let options = readlineSync.questionInt(
    ">> Enter the No for which operation you want to perform: "
  );
  switch (options) {
    case 0:
      console.log(c.redBright("Thank You for using Our CLI Application"));
      process.exit();
      return;
    case 1:
      console.log(c.blue("User Login"));
      userlogin()
      break;
    case 2:
      console.log(c.blue("User Create"));
      createUsers();
      break;
    case 3:
      console.log(c.blue("Delete Account"));
      deleteuser()
      break;
    case 4:
        console.log(c.blue("Enter the task in TODO List"))
        await taskentry();
        break;
    case 5:
        console.log(c.blue("Edit TODO task list"))
        await edittodo()
        break;
    case 6:
        console.log(c.blue("List all TODO Tasks"))
        await getAllTodos();
        break;
    default:
      console.log("Invalid Options");
  }
  let ShouldContine = readlineSync.question("Do you want to continue (y/n)?");
  if (
    ShouldContine == "y" ||
    ShouldContine == "Y" ||
    ShouldContine == "yes" ||
    ShouldContine == "Yes"
  ) {
    loading("Redirecting You to MainMenu").start();
    setTimeout(() => {
      dislaymenu();
    }, 3000);
  } else {
    console.clear();
    return console.log(c.redBright("Thank You for using Our CLI Application"));
  }
}
dislaymenu();
