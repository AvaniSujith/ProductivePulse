import { useState } from "react";
import axios from "axios";

const MarkLeave = () => {
    const [leaveData, setLeaveData] = useState({
        type:"Sick Leave",
        startDate: "",
        endDate: "",
        reason: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setLeaveData({ ...leaveData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const token = localStorage.getItem("token");
            const response = await axios.post("http://localhost:5000/api/leave/request", leaveData, {
                headers : { Authorization: `Bearer ${token}`}
            });

            setMessage(response.data.message);

            setLeaveData({
                category:"Sick Leave",
                startDate:"",
                endDate:"",
                reason:""
            });
        }catch(error){
            setMessage(error.response?.data.message || "Failed to submit leave request")
        }
    };

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                <h2 className="text-2xl font-bold mb-4">
                    Mark Leave
                </h2>
                    {message && <p className="text-green-600">{message}</p>}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                        <label className="font-semibold">Leave Category</label>
                        <select
                            name="category"
                            value={leaveData.category}
                            onChange={handleChange}
                            className="p-2 border rounded"
                        >
                            <option value="Sick Leave">Sick Leave</option>
                            <option value="Casual Leave">Casual Leave</option>
                            <option value="Annual Leave">Annual Leave</option>
                            <option value="Other">Other</option>
                        </select>

                        <label className="font-semibold">Start Date:</label>
                        <input 
                            type="date"
                            name="startDate"
                            value={leaveData.startDate}
                            onChange={handleChange}
                            className="p-2 border rounded"
                            required
                        />

                        <label className="font-semibold">End Date:</label>
                        <input 
                            type="date"
                            name="endDate"
                            value={leaveData.endDate}
                            onChange={handleChange}
                            className="p-2 border rounded"
                            required
                        />

                        <label className="font-semibold">Description:</label>
                        <textarea 
                            name="reason"
                            value={leaveData.reason}
                            onChange={handleChange}
                            className="p-2 border rounded h-20"
                            placeholder="Enter reason (optional)"
                        />

                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded mt-3"
                        >
                            Submit Leave Request
                        </button>

                    </form>
               
            </div>
        </div>
    );
}

export default MarkLeave;