export default async function validate() {
    
  let credentials = {
    username: "Admin",
    password: "12345",
  };
  let userdata = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    rememberme:document.getElementById("remember").checked
  };

  let userpromise = new Promise(function (resolve, reject) {
    if (
    credentials.username == userdata.username &&
    credentials.password == userdata.password
    ) {
    resolve("Login successfull");
    } else {
    reject("Login Failed");
    }
});
 // userpromise
  //  .then(function (successmessage) {
  //    alert(successmessage);
   // })
  //  .catch(function (failedmessage) {
  //    alert(failedmessage);
   // });

   try{
    let successmessage=await userpromise;
    alert(successmessage)
   }
   catch(failedmessage){
    alert(failedmessage);
   }
   if(userdata.checked){
    localStorage.setItem ('username',userdata.username);

    localStorage.setItem('password',userdata.password);
    console.log("Password stored locally")
   }
   else{
    sessionStorage.setItem ('username',userdata.username);

    localStorage.setItem('password',userdata.password);
    console.log('password stored in session')
   }
}