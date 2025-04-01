import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeGreeting(){
    const navigate = useNavigate();
    const employee = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if(!employee || employee.role !== "employee"){
            navigate("/");
        }
    }, [employee, navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1>
                Good Morning, {employee?.name}!
            </h1>
            <div className="flex space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => navigate("/dashboard")}
                >
                    Mark Attendance

                </button>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => navigate("/mark-leave")}
                >
                    Mark Leave
                </button>
            </div>
        </div>
    );
}

export default EmployeeGreeting;