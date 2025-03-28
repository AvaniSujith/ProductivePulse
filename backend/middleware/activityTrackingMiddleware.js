// const Activity = require("../models/Activity");

// const activityTrackingMiddleware = async (request, response, next) => {
//     try {
//         const { employeeID, application, startTime, endTime } = request.body;

//         if(!employeeID || !application, !startTime || !endTime ){
//             return response.status(400).json({ message: "Missing required field"});
//         }


//         let category;
//         if(["VSCode", "Sublime", "Eclipse"].includes(application)){
//             category = "Coding";
//         }else if(["YouTube", "Udemy", "Coursera", "W3Schools", "MDN", "Javascript.info"].includes(application)){
//             category = "Learning";
//         }else if(["Zoom", "Google Meet", "Microsoft Teams"].includes(application)){
//             category = "Meeting";
//         }else if(["Chrome", "Firfox", "Edge"].includes(application)){
//             category = "Browser";
//         }else {
//             category = "Break";
//         }

//         const duration = (new Date(endTime) - new Date(startTime)) / (100 * 60);

//         const newActivity = new Activity({
//             employeeID,
//             category,
//             application,
//             startTime,
//             endTime,
//             duration
//         });

//         await newActivity.save();
//         console.log("Activity logged", newActivity);

//         next();
//     }catch(error){
//         console.error("Error in activity tracking middleware:", error);
//         return res.status(500).json({ message: "Internal server error"})
//     }
// };

// module.exports = activityTrackingMiddleware; 

const Activity = require("../models/Activity");

const categoryMapping = {
    "VSCode" : "Coding", 
    "Sublime" : "Coding", 
    "Eclipse" : "Coding",
    "YouTube" : "Learning", 
    "Udemy" : "Learning", 
    "Coursera" : "Learning", 
    "W3Schools" : "Learning", 
    "MDN" : "Learning", 
    "Javascript.info" : "Learning",
    "Chrome" : "Browsing", 
    "Firfox" : "Browsing", 
    "Edge" : "Browsing"
}

const activeSessions = {};

const trackActivity = async (request, response, next) => {
    try{
        const { employeeID, application } = request.body;

        if(!employeeID || !application){
            return response.status(400).json({ message: "Missing employeeID or application"})
        }

        const category = categoryMapping[application] || "Other";

        if(activeSessions[employeeID]?.application === application){
            activeSessions[employeeID].endTime = new Date();
            activeSessions[employeeID].duration = 
                (activeSessions[employeeID].endTime - activeSessions[employeeID].startTime) / 1000;


            await Activity.create(activeSessions[employeeID]);

            delete activeSessions[employeeID];
        }

        activeSessions[employeeID] = {
            employeeID,
            application,
            category,
            startTime: new Date()
        };

        next();
    }catch(error){
        console.error("Error in activity tracking", error);
    }
};

module.exports = trackActivity;