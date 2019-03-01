const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./openapi.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())

app.post('/areas/:area/presence', (request, response, next) =>{
    console.log('Area:' ,request.params.area);
    console.log('Content:' ,request.body);

    if (!request.body.tags){
        response.status(400).send({error: "Mandatory attribut tags missing"});
    }


    response.status(201).send();
});


app.listen(3000);