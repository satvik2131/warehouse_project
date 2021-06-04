const express = require('express');
const router = express.Router();
const firebase = require('firebase-admin');
require('../modules/firebaseConfig');
const session = require('express-session');
const auth = require('../modules/authorization');
const ref = firebase.database().ref();
const fetch = require('node-fetch');

//Middleware for sessions
router.use(
    session({
      key: "Auth",
      secret: "hidden_secret",
      resave: false,
      saveUninitialized: false,
      duration: 24 * 60 * 60 * 1000, 
      activeDuration: 1000 * 60 * 5
      
    })
  );


//Login Route for Warehouse Admin
router.post("/api/to/login",async (req,res)=>{
    try{
        const username = await req.body.username;
        const password = await req.body.password;
        console.log(username,password)
        var data;
  
        await firebase.database().ref("warehouse_admin")
        .child("CB_OWNER")
        .child("users")
        .orderByChild("username")
        .equalTo(username)
        .once('value',(snap)=>{
            snap.forEach((user)=>{
              data = user.val();
            })
            
        })
  
        if(!data){
          await firebase.database().ref("warehouse_admin")
        .child("CB_USER")
        .child("users")
        .orderByChild("username")
        .equalTo(username)
        .once('value',(snap)=>{
            snap.forEach((user)=>{
              data = user.val();
            })
            
          })
        }
  
        if(!data){
          throw Error("No User Found");
        }
  
        if(data.password===password){
          
          req.session.token = data.uid;
          req.session.type = data.userType;

          res.json({message:"success"});
        }else{
          throw Error("Invalid Credentials");
        }
      }catch(e){
        console.log(e);
        res.status(401).json({message:e});
      }     
});


//Register Route for Warehouse Admin
router.post('/api/to/register',async (req,res)=>{
  try{
    var user_exists = false;


    await firebase.database().ref("warehouse_admin").child(req.body.userType).child("users")
    .orderByChild("username")
    .equalTo(req.body.username)
    .once("value",(snap)=>{
      if(snap.val()){
        user_exists = true;
       return;
      }
    });

    if(user_exists===true){
      res.json({message:"User already exists"});
      return;
    }

    // //Saving users in different database
    const key =  (await firebase.database().ref().push()).key;
    req.body.uid = key;

    await firebase.database().ref("warehouse_admin")
    .child(req.body.userType).child("users").child(key)
    .set(req.body);
    
    //Setting authorization token
    req.session.token =  key;
    //Setting the user type 
    req.session.type = await req.body.userType;

    res.json({message: "registered"});
  }catch(e){
    res.json({message:e});
  }
});


router.post('/api/to/dashboard', auth , async (req,res)=>{
  res.json(req.user);
});


//route for checking authorization 
router.post('/api/to/check/auth', auth , async (req,res)=>{
  
});


//Get all the communes and region 
router.get('/api/to/get/region/commune',async (req,res)=>{
  var communes = [];

  const url = 'https://private-anon-e6d751b6ba-gonzalobulnes.apiary-mock.com/comunas';
  const result = await fetch(url);
  const communesAll = await result.json();
  // console.log(communesAll);
  communesAll.forEach((com)=>{
    communes.push(com.comuna.name);
  })

  //List of all communes
  res.send(communes);

});


//Add CBFORM
router.post('/api/to/cbform' , auth, async (req,res)=>{
  const data = await req.body;
  await ref.child('warehouse_admin').child("CB_OWNER").child('CBFORMS').push(data);
})

module.exports = router;