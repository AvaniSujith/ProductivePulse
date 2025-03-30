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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/authPage"  // Import your Auth component
import ForgotPassword from "./components/ForgotPassword";  // Forgot Password component (create if not exists)
// import Dashboard from "./components/Dashboard";  // The main page after login
import EmployeeDashboard from "./pages/EmployeeDashboard"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />  {/* Login & Signup Page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />  {/* Forgot Password Page */}
        {/* <Route path="/dashboard" element={<Dashboard />} />  Protected Page after Login */}
        <Route path="/dashboard" element={<EmployeeDashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;
