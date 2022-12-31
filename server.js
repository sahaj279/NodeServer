// IMPORTS
const express = require("express"); //for creating server
const mongoose = require("mongoose"); //for accessing mongodb atlas and creating models
const body_parser = require("body-parser"); //for reading req.body and the jsons and urls encoded in request's body
const notes = require("./src/models/notes");
const cors=require('cors');

// INITIALIZATIONS
const app = express();
const Note = require("./src/models/notes");

//MIDDLEWARES
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false })); //if extended is true, Nested objects would be allowed and read
//nested objects mean {user:{}} //object inside object
app.use(cors);

mongoose
  .connect(
    "mongodb+srv://sahaj_279:sahaj_279@cluster0.etgrzci.mongodb.net/sahajdb"
  ) //sahajdb is the name of the database inside the cluster0( a cluster is a group of databases)
  .then(
    //the apis will be created only after mongoose is successfully connected
    () => {
      //ROUTES
      app.get("/", (req, res) => res.json({ hey: "you" }));
     const notesRouter=require('./src/routes/notes');
     app.use("/notes",notesRouter);//now all the requests that come for /notes will get routed through notesrouter and 
     //will go to that file

     
    }
  );
  const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('Server started at PORT '+`${PORT}`);
});
