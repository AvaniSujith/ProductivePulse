const express = require("express")
const mongoose = require("mongoose")
const app = express();
// const adminRoutes = require("./routes/adminRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const attendanceRoutes = require("./routes/attendanceRoutes");
const activityRoutes = require("./routes/activityRoutes");
// const adminLoginRoute = require("./routes/authRoutes/adminLogin");
// const adminSignupRoute = require('./routes/authRoutes/adminSignup');
const adminDashboardRoute = require('./routes/adminRoutes/adminDashboard');
// const employeeLoginRoute = require('./routes/authRoutes/employeeLogin');
// const employeeSignupRoute = require('./routes/authRoutes/employeeSignup');
const forgotPasswordRoute = require('./routes/authRoutes/forgotPassword');
const resetPasswordRoute = require('./routes/authRoutes/resetPassword');
const refreshTokenRoute = require('./routes/refreshToken');
const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup')
const leaveRoutes = require("./routes/leaveRoutes");


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/employeeDatabase')
   
    // useNewUrlParser : true,
    // useUnifiedTopology: true

// })
   .then(() => console.log("Mongodb connected successfully"))
   .catch((err) => {
    console.log('Mongodb connection error:', err);
    process.exit(1);
});


// app.use("/api/admin", adminRoutes);
// app.use("/api/employees", require("./routes/employeeRoutes"))

app.get("/", (req, res) => {
    res.status(200).json({
        message: "API is running",
        timestamp: new Date(). toISOString()
    });
});

// app.get("/ping", (req, res) => {
//     res.status(200).json({
//         message: "Pong!",
//     });
// });

app.use("/api/attendance", attendanceRoutes);
app.use("/api/activity", activityRoutes);
// app.use("/api/auth/admin/login", adminLoginRoute);
// app.use("/api/auth/admin/signup", adminSignupRoute);
// app.use("/api/auth/employee/login", employeeLoginRoute);
// app.use("/api/auth/employee/signup", employeeSignupRoute);
app.use("/api/admin/dashboard", adminDashboardRoute);
app.use("/api/auth/forgot-password", forgotPasswordRoute);
app.use("/api/auth/reset-password", resetPasswordRoute);
app.use("/api/auth/refresh", refreshTokenRoute);
app.use('/api/login', loginRoute);
app.use("/api/signup", signupRoute);
app.use("/api/leave", leaveRoutes);
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// app.post("/api/auth/admin/login", adminLoginRoute);
// app.post("/api/auth/employee/login", employeeLoginRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong',
        error: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message
    });
});

app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found',
        path: req. path
    });
});


const PORT = process.env.PORT || 5000; 
const HOST = process.env.HOST || '0.0.0.0';

const server = app.listen(PORT, HOST, () => {
    // console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Server running on http://${HOST}:${PORT}`);
    console.log(`Process ID: ${process.pid}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

process.on('SIGTERM', ()=> {
    console.log('SIGTERM signal recieved: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        mongoose.connection.close(false, () => {
            console.log("MongoDB connection closed");
            process.exit(0);
        }); 
    });
});

module.exports = app;


// app.listen(PORT, HOST, () => {
//     // console.log(`Server running on http://localhost:${PORT}`);
//     console.log(`Server running on http://${HOST}:${PORT}`);
//     console.log(`Process ID: ${process.pid}`);
//     console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
// }).on('error', (err) => {
//     console.log('Server startup error:', err);
// });


// app.use("/api/admin", adminRoutes); 

// app.use("/api/employees", require("./routes/employeeRoutes"));
// app.use("/api/admin", require("./routes/adminRoutes"));   