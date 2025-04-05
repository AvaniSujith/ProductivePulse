// // import logo from './logo.svg';
// import './App.css';
// // import { render } from '@testing-library/react';

// function App() {
//   return (
//     <div className='flex items-center justify-center h-screen bg-blue-500 text-white text-2xl'>
//       Tailwind is working
//     </div>
//   )
// }

// export default App; 

// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useContext } from "react";

// import Auth from "./pages/AuthPage" 
// import ForgotPassword from "./components/ForgotPassword";  
// // import Dashboard from "./components/Dashboard"; 
// import EmployeeDashboard from "./pages/EmployeeDashboard"; 
// import AdminDashboard from "./pages/AdminDashboard";
// import MarkLeave from "./pages/MarkLeave";
// import AuthContext from "./context/AuthContext";
// import EmployeeGreeting from "./pages/EmployeeGreeting";

// function App() {

//   const { user } = useContext(AuthContext);

//   return (
//     <Router>
//       <Routes>

//         <Route path="/" element={<Auth />} />  
//         <Route path="/forgot-password" element={<ForgotPassword />} />  
     
//         <Route path="/dashboard" element={user?.role === "employee" ? <EmployeeDashboard /> : <Navigate to="/" />} /> 
//         <Route path='/admin' element={user?.role === "admin" ? <AdminDashboard /> : <Navigate to="/" />} />
//         <Route path="/mark-leave" element={<MarkLeave />} />
//         <Route path="/greeting" element={user?.role === "employee" ? <EmployeeGreeting /> : <Navigate to="/" />}  />

//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Auth from "./pages/AuthPage";
import ForgotPassword from "./components/ForgotPassword";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import MarkLeave from "./pages/MarkLeave";
import AuthContext from "./context/AuthContext";
import EmployeeGreeting from "./pages/EmployeeGreeting";

function App() {
  const { user, loading } = useContext( AuthContext ) ||{}; 
  const userRole = user?.role || localStorage.getItem("userRole");

  if(loading){
    return <div>loading..</div>
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={userRole?.toLowerCase() === "employee" ? <EmployeeDashboard /> : <Navigate to="/" />} />
        <Route path="/admin" element={userRole?.toLowerCase() === "admin" ? <AdminDashboard /> : <Navigate to="/" />} />
        <Route path="/greeting" element={userRole?.toLowerCase() === "employee" ? <EmployeeGreeting /> : <Navigate to="/" />} />
        <Route path="/mark-leave" element={<MarkLeave />} />
        {/* <Route path="/greeting" element={userRole?.toLowerCase() === "employee" ? <EmployeeGreeting /> : <Navigate to="/" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
