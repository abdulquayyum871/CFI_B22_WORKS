// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure"
const accountSid = "ACc40f913afd5ded30e9275346d9d40da7";
const authToken = "e038afe5e43ff6c0e3c8e15fd1e63424";
// import twilio from 'twilio';
// let client = twilio(accountSid,authToken)

const client = require('twilio')(accountSid, authToken);
let f = "facebook.com"
async function sendsms() {
	let res = await client.messages

	  .create({
	     body: `Thank you for using this`,
	     from: '+13396751795',
	     to: '+919912321862'
	   })
       console.log(res.sid)
	  
}
sendsms()
// sendSMS({
//     messageBody:"Hello message 5",
//     ph:"+919912321862"
// })