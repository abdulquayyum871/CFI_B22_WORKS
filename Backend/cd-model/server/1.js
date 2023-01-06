import axios from "axios"

async function getdata(){
   try {
    let res = await axios.get(`https://api.github.com/users`,
    {
        auth:{
            username: "abdulquayyum-in",
            password: "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"
        } 
    });
    let data = res.data
    // console.log(data)  
    let arr = data.map(item =>{
        return axios.get(`https://api.github.com/users/${item.login}`,  {
            auth:{
                username: "abdulquayyum-in",
                password: "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"
            } 
        })
       
    
    }) 
    // console.log(arr)
    let response = await Promise.all(arr)
    // console.log(response.length)
    let table =[]
    response.forEach(item=>{
        table.push({
            name : item.data.login,
            id : item.data.id
        })
    })
    console.table(table)
    
   } catch (error) {
    console.error(error)
   }
                                 
}
getdata()