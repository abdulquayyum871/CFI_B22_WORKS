import readlinesync from "readline-sync";
import fs from "fs";
import chalk from "chalk";
import {readFile,writefile,createUsers} from "./usercreate.js"


async function userlogin() {

  let email = readlinesync.questionEMail("Enter Your Mail: ");
  while (!email) {
    email = readlinesync.questionEMail("Enter Your Mail: ");
  }
  console.log(
    chalk.red("Note: The password length should be minimum 8 letters")
  );
  let password = readlinesync.question("Enter Your password: ", {
    hideEchoBack: true,
  });
  while (!password || !(password.length >= 8)) {
    password = readlinesync.question("Re-Enter Your password: ", {
      hideEchoBack: true,
    });
  }

let filedata = readFile("../Databases/data.json")
filedata = JSON.parse(filedata)

let emailfound = filedata.find((ele=>{
    ele.email != email
}))
if(!emailfound){
throw("Unauthorized Access")
}
if(emailfound.password != password){
    console.log("User not Registered")
    let op = readlinesync.questionInt(chalk.greenBright("Enter 1 to make a user account"))
    switch(op){
        case 1:
            createUsers()
    }
}else{
    console.log(chalk.blue("User Registered Successfully"))
}

}

userlogin()