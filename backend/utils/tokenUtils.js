const jwt = require('jsonwebtoken');

// const generateToken = (payload, expiresIn = '1d') => {
//     return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });

// };

// const generateToken = (user) => {

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET,
        {expiresIn: "1h" }
    );
};
// }


const generateRefreshToken = (user) => {
    return jwt.sign({ id: user._id },
        process.env.REFRESH_SECRET,
        { expiresIn: '7d' }
    );
};

const verifyToken = (token, secret) => {
    try {
        // return jwt.verify(token, process.env.JWT_SECRET);
        return jwt.verify(token, secret);
    }catch(error){
        return null;
    }
};

module.exports = {
    generateToken,
    generateRefreshToken,
    verifyToken
}