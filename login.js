const express = require("express");
const app = express();
const logindata= require('./data/logindata')
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello next topper is ')
})
app.get("/login",(req,res)=> {
   
    res.status(200).send(logindata)
})

   app.get("/login/byusername/:username/bypassword/:password", (req, res) => {
        const { username, password } = req.params;
        let login = logindata.filter(
          (ele) => ele.username  === username.toLowerCase() && ele.password === password );

          if(login.length) res.status(200).send({msg:"login successfull", data: login[0]});
          else res.status(400).send({msg: "your username and password is wrong please put on valid username and password"})
      });
      
app.listen(port,()=>console.log('server is listenting on port',port))