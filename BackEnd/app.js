const express = require('express')
const path = require('path')
const app = express();
const router = require('./routes/index')
const bodyParser = require('body-parser')



app.use(express.json())

//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use((req,res,next) =>{
    console.log(req.url, req.method);
    next();
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


//routes
app.use(router)


//listen server
app.listen( app.get('port'), () => {
    console.log( "server on port, ",  app.get('port'))
} )


