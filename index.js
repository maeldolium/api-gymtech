import express from "express";
import sensorsRouter from './routes/sensors.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.use(express.json());
app.use('/sensors', sensorsRouter);

app.listen(3000);