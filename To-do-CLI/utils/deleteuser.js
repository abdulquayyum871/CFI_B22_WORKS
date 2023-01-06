import readlinesync from "readline-sync";
import fs from "fs";
import c from "chalk";
import loading from "loading-cli";
import { readFile, writefile, createUsers } from "./usercreate.js";
import Randomstring from "randomstring";

async function deleteuser(){

    try {
        console.clear()
        console.log(
          c.red("========================================================")
        );
        console.log(c.yellowBright.bold.italic("\t \t \t TO-DO CLI"));
      console.log(
        c.red("========================================================")
      );
      console.log(c.green("\t \t \t USER DELETE "));
      console.log(
        c.red("========================================================")
      );

        let email = readlinesync.questionEMail("Enter Your Email: ");
    while(!email){
        email = readlinesync.questionEMail("Enter Your Email: ");
    }
    let password = readlinesync.question("Enter Your password: ", {
        hideEchoBack: true,
      });
    let fileData = await readFile("../Databases/data.json");
    fileData = JSON.parse(fileData);

    let emailFound = fileData.find((ele)=> ele.email == email)
    // let passFound = fileData.find((ele)=> ele.password == password)
    
    // console.log(emailFound)
    // console.log(passFound)

    if( email != emailFound.email ){
        console.log("Unauthorized Access");
    }
    else if( password != emailFound.password){
         console.log("Unauthorized Access");
    }
    else {
        var cont = yreadlinesync.question("Do you really want to delete the Account (y/n)?")
        if(
            cont =="y"||cont == "Y"||cont == "Yes" || cont == "yes"
        ){
            let a = fileData.indexOf(emailFound)
            let b = fileData.splice(a,1)
            loading("Deleting Your Account").start();
            await writefile("../Databases/data.json",JSON.stringify(fileData))
            setTimeout( async()=>{
                loading().stop();
                console.log(chalk.green("\n User deleted successfully"))
            },3000)
        }
    }
}

        
     catch (error) {

        console.log(error);
    }
}
export default deleteuser;