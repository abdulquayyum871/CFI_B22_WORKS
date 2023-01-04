import readlinesync from "readline-sync";
import fs from "fs";
import chalk from "chalk";

async function createUsers() {
  let Name = readlinesync.question("Enter Full Name: ");
  while (!Name) {
    Name = readlinesync.question("Re-Enter Full Name: ");
  }
  let username = readlinesync.question("Enter Your user name: ");
  while (!username) {
    username = readlinesync.question("Enter Your user name: ");
  }
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
    password = readlinesync.question("Enter Your password: ", {
      hideEchoBack: true,
    });
  }
  let confpassword = readlinesync.question(
    "Enter Your Password for Confirmation: ",
    { hideEchoBack: true }
  );
  while (password != confpassword) {
    console.log(chalk.red("Password Do Not Match"));
    confpassword = readlinesync.question(
      "Enter Your Password for Confirmation",
      { hideEchoBack: true }
    );
  }
  let filedata =await readFile("../Databases/data.json")
  filedata = JSON.parse(filedata);
//   console.log(filedata)

let emailcheck = filedata.find((ele)=>{
    ele.email == email
})
if(emailcheck){
    throw("User Already Exist")
}

let userdata = {Name,username,email,email,password,todo:[]}
console.log(userdata)

filedata.push(userdata)

await writefile("../Databases/data.json",JSON.stringify(filedata))


}

function writefile(filename, filedata){
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, filedata, (err,data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};


function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    })
}

export {readFile,writefile,createUsers}