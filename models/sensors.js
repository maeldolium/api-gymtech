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

export {
    getLastSensorMeasurement
};
