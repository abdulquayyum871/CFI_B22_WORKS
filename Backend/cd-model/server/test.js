import axios from "axios"

async function getAPI(){
    try {
        let res = await axios.get("http://localhost:5000")
        console.log(res.data)
    } catch (error) {
        console.error(error)
    }
}
getAPI()