import getConnection from '../config.js';

const getLastSensorMeasurement = async () => {
    const connection = await getConnection();

    const sql = "SELECT * FROM TEMPERATURE_HUMIDITE ORDER BY ID DESC LIMIT 1";

    try {
        const [rows] = await connection.query(sql);
        return rows[0]; // tu renvoies la dernière mesure
    } catch (err) {
        console.error(err);
        return null;
    }
};

const createLastSensorMeasurement = async (temperature, humidite) => {
    const connection = await getConnection();

    const sql = "INSERT INTO TEMPERATURE_HUMIDITE(temperature, humidite) VALUES (?, ?)";
    const values = [temperature, humidite];

    try {
        const [result] = await connection.query(sql, values);
        const lastData = getLastSensorMeasurement();
        return lastData;
    } catch (err) {
        console.error(err);
        return null;
    }
};


export {
    getLastSensorMeasurement,
    createLastSensorMeasurement
};
