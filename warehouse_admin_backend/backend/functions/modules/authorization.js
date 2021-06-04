const firebase = require('firebase-admin');
require('../modules/firebaseConfig');

const auth = async (req,res,next) => {
    const id = await req.session.token;
    const user_type = await req.session.type;
    console.log(id)

    var data;

    await firebase.database().ref("warehouse_admin")
        .child(user_type)
        .child("users")
        .orderByChild("uid")
        .equalTo(id)
        .once('value',(snap)=>{
            snap.forEach((user)=>{
              data = user.val();
            })    
        })

    if(!data){
        res.status(401).send();
    }

    req.user = data;

    next();
}


module.exports = auth;