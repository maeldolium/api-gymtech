let currentMode = 1; // Stockée en mémoire uniquement

const getMode = (req, res) => {
    res.json({ mode: currentMode });
};

const setMode = (req, res) => {
    const { mode } = req.body;
    if (!mode) {
        return res.status(400).json({ error: "Mode manquante" });
    }

    currentMode = mode;
    console.log(`Nouvelle Mode : ${mode}`);
    res.json({ status: "ok", mode });
};

export { getMode, setMode };
