exports.getStatus = (req, res) => {
    res.json({ message: 'Estado del dispositivo recuperado exitosamente' });
};

exports.store = (req, res) => {
    res.json({ message: 'Estado del dispositivo almacenado' });
};

exports.getMessages = (req, res) => {
    res.json({ message: 'Mensajes de Skyline recuperados' });
};
