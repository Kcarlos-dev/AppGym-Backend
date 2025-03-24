require('dotenv').config({ path: '../.env' })
const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.JWT_SECRET

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(403).json({ message: 'Token não fornecido' });
    }

    const token = authHeader

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        
        req.user = decoded
        next();
    });
}

module.exports = verifyToken;