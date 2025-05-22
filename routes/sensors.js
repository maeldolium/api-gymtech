import express from "express";
import * as sensorsController from '../controllers/sensors.js';

const router = express.Router();

router.get('/', sensorsController.getSensors);
// router.get('/:sensorid/measurement');
router.post('/', sensorsController.getSensors);
// router.post('/:sensorid/measurement');


export default router;