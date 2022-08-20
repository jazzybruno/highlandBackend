const bodyParser = require('body-parser');
const  ContactRouter = require('../routes/contact.routes')
const PostRouter = require('../routes/post.routes')
const AdmissionRouter = require('../routes/admission.routes')
const UserRoute = require('../routes/user.routes')
const { Swaggiffy } = require('swaggiffy'); // Using require



const Middlewares = (app)=>{
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    app.use('/contact' , ContactRouter)
    app.use('/post' , PostRouter)
    app.use('/admission' , AdmissionRouter)
    app.use('/user' , UserRoute)

      //the swaggiffy start
      new Swaggiffy().setupExpress(app).swaggiffy();
      //the swaggidy end
}

module.exports = Middlewares