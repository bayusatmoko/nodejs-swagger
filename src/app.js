import express from 'express';
const testRouter = require('./routes/sum');
import bodyParser from 'body-parser';
const swaggerUi = require('swagger-ui-express');
const swaggerSumDocument = require ('../swaggerSumDocument');

const app = express();

app.use(bodyParser.json());
app.use('/sum', testRouter);
app.use('/api-docs-sum', swaggerUi.serve, swaggerUi.setup(swaggerSumDocument));

export default app;
