const Attendance = require("../../models/Attendance");

const getEmployeesWithMostLeaves = async (request, response) => {
    try {
        const { period } = request.query;

        let startDate;
        const endDate = new Date();

        if(period === "week"){
            startDate = new Date();
            startDate.setDate(endDate.getDate() - 7);
        }else if(period === "month"){
            startDate = new Date();
            startDate.setDate(1);
        }else{
            return response.status(400).json({ message: "Invalid period."})
        }

        startDate.setHours(0, 0, 0, 0);

        const leaveCounts = await Attendance.aggregate([
            {
                $match: {
                    date: { $gte: startDate, $lte: endDate},
                    status: "Absent"
                }
            },
            {
                $group: {
                    _id: "$employee",
                    leaveCount: { $sum: 1}
                }
            },
            { $sort: { leaveCount: -1}},
            {$limit: 10}
        ]);

        response.status(200).json({ period, leaveCounts });
    }catch(error){
        console.error("Error fetching leave data: ", error);
        response.status(500).json({ message: "Internal Server Error"})
    }
};

module.exports = { getEmployeesWithMostLeaves };