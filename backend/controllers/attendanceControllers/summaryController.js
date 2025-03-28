const Attendance = require("../../models/Attendance");

const calculateWorkHours = (attendance) => {
    if(!attendance.sessions || attendance.sessions.length === 0){
        return 0;
    }

    let totalWorkDuration = 0;
    let totalBreakTime = 0;

    attendance.sessions.forEach((session)=> {
        if(session.checkInTime && session.checkOutTime){
            totalWorkDuration += session.checkOutTime - session.checkInTime;
        }
    });

    attendance.breaks.forEach((br) => {
        if(br.startTime && br.endTime){
            totalBreakTime += br.endTime - br.startTime;
        }
    });

    return Math.max(0, totalWorkDuration - totalBreakTime);
};

module.exports = { calculateWorkHours };