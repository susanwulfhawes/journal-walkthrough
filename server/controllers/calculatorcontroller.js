let  express = require('express');
let router = express.Router();

router.post('/add', function(req,res){
    console.log('hi');
    let number1 = req.body.num1;
    let number2 = req.body.num2;

    let obj = {total: number1 + number2};
    res.json(obj);
    
})

module.exports = router;