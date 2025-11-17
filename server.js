// This file is making a Server and learn Server
// no need to install any package and modules because node already install module for http server

//----------------------------------------------------
//make first server for your Web Page
// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.end("This Server is Running On Arshil Laptop")
// });

// server.listen(1111,()=>{
//     console.log("Your Server is Ruuning on Node");
// })
//------------------------------------------------------
//Practice File
// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end('');
    
// });

// server.listen(3, console.log("Server is Running On Port : 3OOO")
// );

//------------------------------------------------------------
// const cat = require("cat-me");  //this package and this is install by user in NPM Site ("npm i cat-me")

// console.log(cat());
//------------------------------------------------------------

// express ko install karne ke liye 
//first step enter 
// npm init -y
//second step
// npm i express

// npm ka use karne se pahle hame package ko install karna padta hai,
// npx ka use karne se pahle hame kuch install nhi karna padta
// example -  nodemon package ko direct use karne ke liye ham command likhenge
// npx nomdemon ka use karne se hame server ko baar baar restart nhi karna padta ham jab hamne kuch change kiye ho apne server mein

// npx nodemon filename.js

//--------------------------------------------------------------

// const express = require('express');

// const app = express();

// app.get('/Home',(req,res)=>{
//     res.send("Your Home Page is Open");
// })

// app.get('/About',(req,res)=>{
//     res.send("Your About Page is open");
// })
// // app.get('/Contact',(req,res)=>{
// //     res.send("Your Contact Page is open");
// // })


// app.listen(3000,()=>{
//     console.log("Server is running on Express");
// })

//--------------------------------------------------------------
/**
Talk about Methods in REST API
#get - Hame Server se data milta hai
#post - Ham Server par data ko send karte hain
#patch - Server par pahle se existing data ko update karna
#delete - Server par data ko delete karna ya remove karna 
*/

//--------------------------------------------------------------------
//Data ko Server par bhejne ke liye POST method ka use karte hain....
// const express = require('express');
// const app = express();


// app.use(express.json());  // builting Middleware for run req.body

// let notes =[];
// app.post('/notes', (req,res)=>{
//     console.log(req.body);

//     notes.push(req.body);

//     res.json({
//         massage : "Your data is successfull added",
//         notes : notes
//     })
// })

// app.listen(3000,()=>{
//     console.log("Your Server is Running fine");
    
// })

/* ye code hame Postman ke body mein inter karna hai
{
    "title" : "new_title",
    "description" : "new_discription"
}
    
*/

//------------------------------------------------------------------------
//use of GET/POST/DELETE method in single server
// const express = require('express');

// const app = express();

// app.use(express.json())
// let notes = [];

// //normal sa slash par agar koi aayega to Hello Doston! show hoga
// app.get('/',(req,res)=>{
//     console.log("Hello! Doston");
// })

// //use of post method
// app.post('/notes', (req,res)=>{
//     console.log(req.body);
    
//     notes.push(req.body)

//     res.json({
//         Message : "Note Created Successfully",
//     })
// })

// //use of get method
// app.get('/notes', (req,res)=>{
//         res.json(notes);
// })

// //use of DELETE method
// app.delete('/notes/:index',(req,res)=>{
//     const index = req.params.index
//     delete notes[index]
//     res.json({
//         Message: "Note Deleted Sucessfull",        
//     })
// })

// //use of PATCH method for update
// app.patch('/notes/:index', (req,res)=>{
//     const index = req.params.index
//     const {title} = req.body

//     notes[index].title = title

//     res.json({
//         Message : "Note Updated Sucessfull",
//     })
// })

// //server ko run karne ke liye(npx nodemon server.js)
// app.listen(3000,()=> {
//     console.log("My server is running Fine");  
// })

//--------------------------------------------------------------------------
//Today Im using MongoDB Database
// First login MongoDB Website (https://www.mongodb.com/) and Install MongoDB Compass.exe and setup
/*
today Work
POST .notes => {title, content}
GET /notes => get all notes
DETELET /notes/:id => delete a notes
PATCH /notes/:id =>  update a note
*/

const express =require('express')
const connectToDB = require('./src/db/db')

connectToDB()

const app =express();
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.post('/notes', (req,res)=>{
    const {title,content} = req.body
    console.log(title,content)
    

    // console.log(req.body);
    
})



app.listen(3000,()=>{
    console.log('Server is Running on 3000');
})