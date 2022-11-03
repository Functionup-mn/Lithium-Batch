const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const loggingData = require('./middlewares/mid1')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




mongoose.connect("mongodb+srv://mnadeem:h1QaS5NNUx2zm2tM@cluster0.v4od3qa.mongodb.net/Lithium-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");     // if we write this code bottom of the app.use('/', route) then the code will not excute
        next();
  }
  );

  app.use(
    function(req, res,next){
        const currentTimeStamps = Date.now()
        const currentDate = new Date()
        const ipAddress = req.ip
        const path = req.originalUrl
    
        console.log(currentTimeStamps, currentDate, ipAddress, path)
    
        next()
    }
  )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
