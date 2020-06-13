import express from 'express';
const testRouter = require('./routes/sum');
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use('/sum', testRouter);

export default app;
