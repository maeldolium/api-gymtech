import express from "express";
import * as sensorsController from '../controllers/sensors.js';

const router = express.Router();

router.get('/measurement', sensorsController.getSensors);
router.post('/measurement', sensorsController.createSensorValues);

export default router;