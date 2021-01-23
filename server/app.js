//express library
require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require("./db");
let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');
let calc = require('./controllers/calculatorcontroller');

//sequelize.sync({force:true});
sequelize.sync();

app.use(require('./middleware/headers'));
// app.options('*', (req,res) => {
//     res.json({
//         status: 'OK'
//     })
// })

app.use(express.json());
app.use('/journal',  journal);
app.use('/user', user);
app.use('/calculator', calc);

//code is above


app.listen(3000, function(){
    console.log("App is listening on port 3000");
});

//run with nodemon

//localhost:3000

//localhost:3000/test  - this is the endpoint
