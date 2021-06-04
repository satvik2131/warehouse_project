const express = require('express');
const app = express();
const functions = require('firebase-functions');
const warehouse_admin = require('./routes/warehouse_admin');
const bodyParser = require('body-parser');



app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(warehouse_admin);


exports.app1 = functions.https.onRequest(app);