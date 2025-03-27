// const jwt = require('jsonwebtoken');
// const Employee = require('../models/Employee');
// const Admin = require('../models/Admin');

// const authenticateUser = async (req, res, next) => {
//     try {
//         // Log the entire headers to see what's being received
//         console.log('Request Headers:', req.headers);

//         // Get the Authorization header
//         const authHeader = req.header('Authorization');
//         console.log('Authorization Header:', authHeader);

//         // If no header or doesn't start with Bearer
//         if (!authHeader || !authHeader.startsWith('Bearer ')) {
//             console.log('No Bearer token found');
//             return res.status(401).json({ message: 'No token, authorization denied' });
//         }

//         // Extract token (remove 'Bearer ' from the start)
//         const token = authHeader.split(' ')[1].trim();
//         console.log('Extracted Token:', token);

//         if (!token) {
//             console.log('Token is empty');
//             return res.status(401).json({ message: 'No token, authorization denied' });
//         }

//         // Verify the token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         console.log('Decoded Token:', decoded);

//         // Find user
//         let user = await Employee.findById(decoded.id);
//         if (!user) {
//             user = await Admin.findById(decoded.id);
//         }

//         if (!user) {
//             console.log('User not found for ID:', decoded.id);
//             return res.status(401).json({ message: 'User not found' });
//         }

//         // Attach user to request
//         req.user = user;
//         req.userType = user.role;
//         next();
//     } catch (error) {
//         console.error('Authentication Error:', error);
//         return res.status(401).json({ 
//             message: 'Token is not valid', 
//             error: error.message 
//         });
//     }
// };

// const requireAdmin = (req, res, next) => {
//     if (req.userType !== 'Admin') {
//         return res.status(403).json({ message: 'Access denied. Admin rights required.' });
//     }
//     next();
// };

// module.exports = {
//     authenticateUser,
//     requireAdmin
// };


const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const Admin = require('../models/Admin');

const authenticateUser = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {

            console.warn('Unauthorised access sunce no token is provided');

            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1];
        console.log('Recieved token:', token);


        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded token:", decoded);

        let user = await Employee.findById(decoded.id) || await Admin.findById(decoded.id);

        if (!user) {
            console.warn("User not found")
            return res.status(401).json({ message: 'Unauthorized: Invalid user' });
        }

        if(user.status !== 'active'){
            console.warn('Inactive account');
            return res.status(403).json({ message: 'Account not active'})
        }

        req.user = user;
        req.userType = user.role;

        next();

    } catch (error) {
        console.error('authentication error',  error)
        res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

const requireAdmin = (req, res, next) => {

    if (!req.user || !['Admin', 'superadmin'].includes(req.user.role)) {
        console.warn("Access denied")
        return res.status(403).json({ message: 'Access denied: Admin rights required' });
    }
    next();
};

module.exports = { authenticateUser, requireAdmin };
