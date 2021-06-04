
var admin = require("firebase-admin");

var serviceAccount = require("../credentials/key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://warehouse-50c38-default-rtdb.firebaseio.com"
});
