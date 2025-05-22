import * as sensorsModel from '../models/sensors.js';

const getSensors = async (req, res) => {
    const { sensorid } = req.params;
    const value = await sensorsModel.getLastSensorMeasurement();
    res.json(value);
}

export {
    getSensors
}
