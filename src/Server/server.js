const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose')
const config = require('./DB config')
const noteRoute = require('./note.route')

mongoose.Promise = global.Promise;
mongoose.connect(config.databse,{useNewUrlParser: true}).then(
    () => {console.log('Database(mLab) is connected')},
    err => {console.log('Database(mLab) is note connect' + err)}
);
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/note',noteRoute)

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
