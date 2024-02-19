var Db  = require('./dboperations');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express/lib/express');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next)=>{
   console.log('middleware');
   next();
})

router.route('/users').get((request,response)=>{

    dboperations.getUsersfx().then(result => {
       response.json(result[0]);
    })

})

router.route('/users/:id').get((request,response)=>{

    dboperations.getUserfx(request.params.id).then(result => {
       response.json(result[0]);
    })

})


router.route('/users').post((request,response)=>{

   let userfx = {...request.body}

   dboperations.addUserfx(userfx).then(result => {
      response.status(201).json(result);
   })

})





router.delete('/users/:id',(request,response)=>{

   dboperations.deleteUsersfx(request.params.id).then(result => {
      response.json(result[0]);
   })
})


router.put('/users/:id',(request,response)=>{
   let userfx = {...request.body}
   
   dboperations.putUsersfx(request.params.id,userfx).then(result => {
      response.json(result[0]);
   })
})


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Userfx API is runnning at ' + port);



