import readlineSync from "readline-sync"
import c from "chalk"
import fs from "fs"
import loading from "loading-cli"
function dislaymenu() {
   
    console.clear()
    console.log(c.red("========================================================"))
    console.log(c.yellowBright.bold.italic("\t \t \t TO-DO CLI"))
    console.log(c.red("========================================================"))
    console.log(c.green("\t \t \t MAIN MENU "))
    console.log(c.red("========================================================"))
    console.log(c.underline.cyanBright("Choose the Operation you want to Perform"))
    console.log(c.whiteBright(`
    1.User Login 
    2.User Create
    3.Delete Account
    4.Exit`))    
    console.log(c.red("========================================================"))
    let options = readlineSync.questionInt((">> Enter the No for which operation you want to perform: "))
    switch(options){
        case 4:
            console.log(c.redBright("Thank You for using Our CLI Application"))
            process.exit()
            return
        case 1:
            console.log(c.blue("User Login"))
            break;
        case 2:
            console.log(c.blue("User Create"))
            break;
        case 3:
            console.log(c.blue("Delete Account"))
            break
        default:
            console.log("Invalid Options")
    }
    let ShouldContine = readlineSync.question("Do you want to continue (y/n)?")
    if(ShouldContine == "y"||ShouldContine =="Y"||ShouldContine=="yes"||ShouldContine=="Yes"){
    loading("Redirecting You to MainMenu").start()
    setTimeout(()=>{
        dislaymenu()
      },3000)
      
}else{
    console.clear()
    return console.log(c.redBright("Thank You for using Our CLI Application"))
}
}
dislaymenu()