import firebase from "firebase/app";
import {React,Component,useEffect,useState} from "react";
import {Route , Redirect} from "react-router-dom";
const fetch = require('node-fetch');

require('firebase/auth');
require('firebase/database');
require('../modules/firebaseConfig');




const ProtectedRoute =  ({path,component:Component,render, ...rest})=>{
    var [status,setStatus] =  useState(false);
    
    useEffect(async ()=>{
        const result = await fetch('/api/to/check/auth',{method:'POST'});
    });


    return (
        <Route
        path= {path}
        {...rest}
        render={ (props) => {
            if(status===true){
                return Component ? <Component {...props}/>:render(props); 
            }else return;
        }}
        />
    );
};



export default ProtectedRoute;