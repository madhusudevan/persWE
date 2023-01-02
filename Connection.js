
const mongoClient=require('mongodb').MongoClient


module.exports.connect=function(done){
    const url='mongodb://localhost:27017'
    const dbname='personal_web'

    mongoClient.connect(url,(err,data)=>{
        if(err)  return done(err)
        state.db=data.db(dbname)
        console.log("----")
    })
    done()
}
module.exports.get=function(){
    return state.db
}
