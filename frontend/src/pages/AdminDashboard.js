import { useContext } from "react";
import  AuthContext from "../context/AuthContext";


const AdminDashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1>Welcome {user?.name} (Admin)</h1>
            <button>View Employees</button>
            <button>Manage attendace</button>
        </div>
    )
};

export default AdminDashboard; 