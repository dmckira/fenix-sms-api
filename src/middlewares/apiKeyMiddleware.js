module.exports = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    
    if (!apiKey) {
        return res.status(403).json({ error: 'API Key requerida' });
    }

    // Aquí validas la API Key en la BD o Redis
    if (apiKey !== process.env.API_KEY) {
        return res.status(403).json({ error: 'API Key inválida' });
    }

    next();
};
