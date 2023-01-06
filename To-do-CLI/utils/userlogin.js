import readlinesync from "readline-sync";
import fs from "fs";
import c from "chalk";
import loading from "loading-cli";
import { readFile, writefile, createUsers } from "./usercreate.js";


async function userlogin() {
  try {

    console.clear()
    console.log(
      c.red("========================================================")
    );
    console.log(c.yellowBright.bold.italic("\t \t \t TO-DO CLI"));
  console.log(
    c.red("========================================================")
  );
  console.log(c.green("\t \t \t USER LOGIN "));
  console.log(
    c.red("========================================================")
  );
    let email = readlinesync.questionEMail("Enter Your Mail: ");
    while (!email) {
      email = readlinesync.questionEMail("Enter Your Mail: ");
    }
    console.log(
      c.red("Note: The password length should be minimum 8 letters")
    );
    let password = readlinesync.question("Enter Your password: ", {
      hideEchoBack: true,
    });

    let fileData = await readFile("data.json");
    fileData = JSON.parse(fileData);

    //Checking if User Exists
    let emailFound = fileData.find((ele) => ele.email == email);
    let passFound =  fileData.find((ele) => ele.password == password);
    if (emailFound != email && passFound!=password) {
        console.log("Unauthorised Access");
        let shouldcont = readlinesync.question(
          "If you want to make an account then proceed and press(y/n)"
        );
        if (
          shouldcont == "Y" ||
          shouldcont == "y" ||
          shouldcont == "Yes" ||
          shouldcont == "yes"
        ) {
          loading("Redirecting You to User Signup").start();
          setTimeout(() => {
            console.clear();
            console.log(c.green("\n User ID Creation\n"));
            createUsers();
          }, 3000);
          return;
    }
   
    }else
    console.log("User Signed in Successfully")
} catch (error) {
    console.error(error);
}
}

export default userlogin;