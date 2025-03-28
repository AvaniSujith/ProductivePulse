const Attendance = require("../../models/Attendance");

const markCheckIn = async ( request, response) => {
    try {
        const { employeeId } = request.body;

        if(!employeeId){
            return response.status(400).json({ message: "Employee ID is required" });
        }

        // const today = new Date().setHours(0, 0, 0, 0);
        const today = new Date().toISOString.split("T")[0];

        let attendance = await Attendance.findOne({ employee: employeeId, date: today });

        // if(attendance){
        //     return response.status(400).json({ message: "Already checked in"});
        // }



        // attendance = new Attendance({
        //     employee: employeeId,
        //     status: "Checked-In",
        //     checkInTime: new Date(),
        // });

        if(!attendance){
            attendance = new Attendance({
                employee: employeeId,
                date: today,
                status: "Checked-In",
                sessions: [{ checkInTime: new Date()}]
                // checkInTime: new Date(),
                // checkoutTime: null,
                
            })
        }else{
            // if(attendance.checkOutTime){
            //     return response.status(400).json({ message: "Already checked out."})
            // }

            // attendance.checkInTime = new Date();
            // attendance.checkOutTime = null;
            // attendance.status = "Checked-In";

            if(attendance.sessions.length >=2){
                return response.status(400).json({ message: "Already checked in twice"})
            }

            const lastSession = attendance.sessions.length > 0? attendance.sessions[attendance.sessions.length - 1] : null ;
            
            if(lastSession && !lastSession.checkOutTime){
                return response.status(400).json({ message: "You must check out before check in again"})
            }

            attendance.sessions.push({ checkInTime: new Date() });

        }


        await attendance.save();

        response.status(201).json({ message: "Checked in successfully", attendance});
    }catch(error){
        console.error("Error marking check-in:", error);
        response.status(500).json({ message: "Internal Server Error"});
    }
};

module.exports = { markCheckIn }