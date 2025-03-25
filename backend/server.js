const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/employeeDatabase', {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(() => console.log("Mongodb connected successfully"))
.catch((err) => console.log('Mongodb connection error:', err));

app.get("/", (req, res) => {
    res.send("API IS RUNNING");

});


// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Process ID: ${process.pid}`);
}).on('error', (err) => {
    console.log('Server startup error:', err);
});