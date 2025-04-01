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


// const jwt = require('jsonwebtoken');
// const Employee = require('../models/Employee');
// const Admin = require('../models/Admin');

// const authenticateUser = async (req, res, next) => {
//     try {
//         const authHeader = req.header('Authorization');

//         if (!authHeader || !authHeader.startsWith('Bearer ')) {

//             console.warn('Unauthorised access since no token is provided');

//             return res.status(401).json({ message: 'Unauthorized: No token provided' });
//         }

//         const token = authHeader.split(' ')[1];
//         console.log('Recieved token:', token);


//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         console.log("decoded token:", decoded);

//         // let user = await Employee.findById(decoded.id) || await Admin.findById(decoded.id);

//         const [ employeeResult, adminResult ] = await Promise.allSettled([
//             Employee.findById(decoded.id),
//             Admin.findById(decoded.id),
//         ]);


//         const user = employeeResult.status === 'fulfilled' && employeeResult.value
//             ? employeeResult.value
//             : adminResult.status === 'fulfilled' && adminResult.value
//             ? adminResult.value
//             : null;

//         if (!user) {
//             console.warn("User not found")
//             return res.status(401).json({ message: 'Unauthorized: Invalid user' });
//         }

//         if(user.status !== 'active'){
//             console.warn('Inactive account');
//             return res.status(403).json({ message: 'Account not active'})
//         }

//         req.user = user;
//         req.userType = user.role;

//         next();

//     } catch (error) {
//         console.error('authentication error', error.message || error)
//         res.status(401).json({ message: 'Unauthorized: Invalid token' });
//     }
// };

// const requireAdmin = (req, res, next) => {

//     if (!req.user || !['Admin', 'superadmin'].includes(req.user.role)) {
//         console.warn("Access denied")
//         return res.status(403).json({ message: 'Access denied: Admin rights required' });
//     }
//     next();
// }; 

// module.exports = { authenticateUser, requireAdmin }; 



const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const Admin = require('../models/Admin');
const dotenv = require('dotenv');
const { request, response } = require('express');
dotenv.config();

const authenticateUser = async (request, response, next) => {
    try{
        const authHeader = request.header('Authorization');
        if(!authHeader || !authHeader.startsWith('Bearer ')){
            return response.status(401).json({ message: 'No token, authorization denied' });
        }

        const token = authHeader.split(' ')[1].trim();
        if(!token){
            return response.status(401).json({message: 'Token missing, authorization denied'});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        request.user = decoded;
        next();
    }catch(error){
        return response.status(401).json({ message: 'Invalid token' });
    }
};

const authorizeRole = (roles) => {
    return (request, response, next) => {
        if(!roles.includes(request.user.role)){
            return response.status(403).json( { message: "Access denied"});
        }
        next();
    }
}

const requireAdmin = authorizeRole(["admin"]);

module.exports = { authenticateUser, requireAdmin, authorizeRole }