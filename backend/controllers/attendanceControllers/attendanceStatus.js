const Attendance = require("../../models/Attendance");

exports.updateAttendanceStatus = async (request, response) => {
    try{
         const { attendanceID, status } = request.body;

         if(!attendanceID || !status){
            return response.status(404).json({ message: "Attendance ID ans status are required"});
         }

         const attendace = await Attendance.findById(attendanceID);

         if(!attendace){
            return response.status(404).json({ message: "Attendance record not found"});
         }

         attendace.status = status;
         await attendace.save();

         response.status(200).json({ message: "Attendance status updated", attendace });
    }catch(error){
        console.error("Error updating status ", error);
        response.status(500).json({ message: "internal server error"});
    }
};