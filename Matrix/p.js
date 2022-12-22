import readlineSync from "readline-sync"
let r = 5
let c =6
let arr = new Array(r)
for(i=0;i<=r;i++){
    arr[i]= new Array[c]
}

for(i=0;i<=r;i++){
    for(j=0;j<=c;j++){
        arr[i][j]=readlineSync.questionInt("Enter numbers")
    }
}
console.log(arr)