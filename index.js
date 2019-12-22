const express = require('express'); 
const app = express(); 
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const options = require('./swagger');

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJsDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Routes
/**
 * @swagger
 * /name/{name}:
 *  get:
 *    summary: Get a name message
 *    parameters:
 *    - in: path
 *      name: name
 *      schema:
 *        type: string
 *      required: true
 *    description: Use to return your name with a message
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/name/:name', (req, res) => {
    res.json({name:`Your name is ${req.params.name}`});
}); 

app.listen(3333);