const mongoose = require('mongoose');


  function connection(){
   mongoose.connect( process.env.DB_URL , { useNewUrlParser: true } , (err)=>{
         if(err){
              console.log(err)
         }else{
               console.log('connected to mongodb')
         }
   });
}

module.exports.connection = connection;
