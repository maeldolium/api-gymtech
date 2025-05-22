import * as sensorsModel from '../models/sensors.js';

const getSensors = async (req, res) => {
    const { sensorid } = req.params;
    const value = await sensorsModel.getLastSensorMeasurement();
    res.json(value);
}

const createSensorValues = async (req, res) => {
    const { temperature, humidite } = req.body;
    console.log(temperature, humidite);
    const value = await sensorsModel.createLastSensorMeasurement(temperature, humidite);
    res.json(value);
};


export {
    getSensors,
    createSensorValues
}
