

const express = require ("express")
const app = express()
const cors = require('cors')
const port = 4000
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://0.0.0.0:27017/";
const db_name = 'personal_web'

//middleware
app.use (express.urlencoded({extended : true}))
app.use (express.json())
app.use(cors())

function insert({email}){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    var db = db.db(db_name)
     db.collection('mail').insertOne({email})
   
  });
}

function contact({name,email,message}){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    var db = db.db(db_name)
    var result=  db.collection('contact').insertOne({name,email,message}).then((res,err)=>{
      
          if(err){
            console.log(err)
          }
          
         
          
            console.log(JSON.stringify (res)+'response')
          
        if(res.acknowledged==true){
          return  {message :"data inserted"}

          
        }
      
     })
     
     })
   
  
}


  app.post('/post_email', async (req, res) => {
    console.log(req.body)
     var email= await req.body.email
      insert({email})
    });
 
app.post('/post_contact', async (req,res) => {

  console.log(req.body)
  var name = req.body.name
  var email =  req.body.mail
  var message =  req.body.message
 contact({name,email,message})
 var marc = contact.result
 console.log(marc,"12525")
  
 
  return res.send({ message:'Data saved'})
  
})


  app.listen (port,()=>{
    console.log(`Listening at http://localhost:${port}`)
  })

  