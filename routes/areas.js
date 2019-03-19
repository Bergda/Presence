const express = require('express');
const router = express.Router();

router.post('/areas/:area/presence', (request, response, next) =>{
    console.log('Area:' ,request.params.area);
    console.log('Content:' ,request.body);

    if (!request.body.tags){
        response.status(400).send({error: "Mandatory attribut tags missing"});
    }

    response.status(201).send();
});

module.exports = router;
