// import React, { useState, useEffect } from "react";
// import { Pie } from "react-chartjs-2";
// import "chart.js/auto";
// import "../App.css";

// const App = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState("dashboard");
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [tasks, setTasks] = useState([]);
//   const [breaks, setBreaks] = useState("");
//   const [weekData, setWeekData] = useState([
//     { day: "Mon", status: "present" },
//     { day: "Tue", status: "absent" },
//     { day: "Wed", status: "upcoming" },
//     { day: "Thu", status: "present" },
//     { day: "Fri", status: "present" },
//   ]);

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const chartData = {
//     labels: ["Meetings", "Development", "Breaks", "Other"],
//     datasets: [
//       {
//         data: [2, 5, 1, 2],
//         backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
//       },
//     ],
//   };

//   return (
//     <div className="container">
//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//         <button onClick={() => setSidebarOpen(false)}>Close</button>
//         <ul>
//           <li onClick={() => setCurrentPage("dashboard")}>Dashboard</li>
//           <li onClick={() => setCurrentPage("tasks")}>Tasks</li>
//           <li onClick={() => setCurrentPage("chatroom")}>Chatroom</li>
//         </ul>
//       </div>

//       {/* Main Section */}
//       <div className="main-content">
//         <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
//           ☰
//         </button>
//         <div className="top-bar">
//           <div className="timer">{currentTime.toLocaleTimeString()}</div>
//           <button className="break-btn" onClick={() => setBreaks("Lunch")}>Mark Break</button>
//         </div>

//         {currentPage === "dashboard" && (
//           <div className="dashboard">
//             {/* Weekly Attendance */}
//             <div className="week-tracker">
//               {weekData.map((day, index) => (
//                 <div key={index} className={`day-box ${day.status}`}>{day.day}</div>
//               ))}
//             </div>

//             {/* Task Section */}
//             <div className="tasks">
//               <input
//                 type="text"
//                 placeholder="Enter Task"
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") setTasks([...tasks, e.target.value]);
//                 }}
//               />
//               <ul>
//                 {tasks.map((task, index) => (
//                   <li key={index}>{task}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Time Tracking Pie Chart */}
//             <div className="chart-container">
//               <Pie data={chartData} />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import { Pie } from "react-chartjs-2";
// import "chart.js/auto";

// const App = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState("dashboard");
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [tasks, setTasks] = useState([]);
//   const [breaks, setBreaks] = useState("");
//   const [weekData, setWeekData] = useState([
//     { day: "Mon", status: "present" },
//     { day: "Tue", status: "absent" },
//     { day: "Wed", status: "upcoming" },
//     { day: "Thu", status: "present" },
//     { day: "Fri", status: "present" },
//   ]);

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const chartData = {
//     labels: ["Meetings", "Development", "Breaks", "Other"],
//     datasets: [
//       {
//         data: [2, 5, 1, 2],
//         backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
//       },
//     ],
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}`}>
//         <button className="text-white text-lg" onClick={() => setSidebarOpen(false)}>Close</button>
//         <ul className="mt-4 space-y-4">
//           <li className="cursor-pointer hover:text-gray-400" onClick={() => setCurrentPage("dashboard")}>Dashboard</li>
//           <li className="cursor-pointer hover:text-gray-400" onClick={() => setCurrentPage("tasks")}>Tasks</li>
//           <li className="cursor-pointer hover:text-gray-400" onClick={() => setCurrentPage("chatroom")}>Chatroom</li>
//         </ul>
//       </div>
      
//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <button className="text-2xl mb-4" onClick={() => setSidebarOpen(true)}>☰</button>
//         <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
//           <div className="text-lg font-bold">{currentTime.toLocaleTimeString()}</div>
//           <button className="px-4 py-2 bg-yellow-500 text-white rounded-md" onClick={() => setBreaks("Lunch")}>Mark Break</button>
//         </div>
        
//         {currentPage === "dashboard" && (
//           <div className="mt-6">
//             {/* Weekly Attendance */}
//             <div className="grid grid-cols-5 gap-4">
//               {weekData.map((day, index) => (
//                 <div key={index} className={`p-4 text-center rounded-md ${day.status === "present" ? "bg-green-500 text-white" : day.status === "absent" ? "bg-red-500 text-white" : "bg-gray-500 text-white"}`}>
//                   {day.day}
//                 </div>
//               ))}
//             </div>
            
//             {/* Task Section */}
//             <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
//               <input
//                 type="text"
//                 placeholder="Enter Task"
//                 className="border p-2 w-full mb-4"
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") setTasks([...tasks, e.target.value]);
//                 }}
//               />
//               <ul className="space-y-2">
//                 {tasks.map((task, index) => (
//                   <li key={index} className="p-2 bg-gray-200 rounded-md">{task}</li>
//                 ))}
//               </ul>
//             </div>
            
//             {/* Time Tracking Pie Chart */}
//             <div className="mt-6 max-w-sm mx-auto bg-white p-4 shadow-md rounded-lg">
//               <Pie data={chartData} />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect } from "react";
// import { Menu, Clock, CheckSquare, Trash2, Flag } from "lucide-react";

// const App = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [breakModalOpen, setBreakModalOpen] = useState(false);
//   const [selectedBreak, setSelectedBreak] = useState("");
//   const [priorityModalOpen, setPriorityModalOpen] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [newTask, setNewTask] = useState("");

//   const [weekData, setWeekData] = useState([
//     { day: "Mon", date: "25", status: "present" },
//     { day: "Tue", date: "26", status: "absent" },
//     { day: "Wed", date: "27", status: "upcoming" },
//     { day: "Thu", date: "28", status: "present" },
//     { day: "Fri", date: "29", status: "present" },
//     { day: "Sat", date: "30", status: "upcoming" },
//     { day: "Sun", date: "31", status: "upcoming" }
//   ]);

//   const [tasks, setTasks] = useState([
//     { 
//       id: 1, 
//       name: "Learn coding", 
//       priority: "secondary", 
//       completed: false,
//       startDate: new Date('2025-03-29T09:00:00'),
//       endDate: new Date('2025-03-30T17:00:00'),
//       flagged: false
//     },
//     { 
//       id: 2, 
//       name: "Project development", 
//       priority: "primary", 
//       completed: false,
//       startDate: new Date('2025-03-29T10:00:00'),
//       endDate: new Date('2025-04-05T17:00:00'),
//       flagged: true
//     }
//   ]);

//   const priorityColors = {
//     primary: "text-red-500",
//     secondary: "text-yellow-500",
//     least: "text-green-500"
//   };

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const getStatusColor = (status) => {
//     switch(status) {
//       case "present": return "bg-green-500";
//       case "absent": return "bg-red-500";
//       case "upcoming": return "bg-gray-500";
//       default: return "bg-gray-200";
//     }
//   };

//   const openPriorityModal = (task) => {
//     setSelectedTask(task);
//     setPriorityModalOpen(true);
//   };

//   const changePriority = (priority) => {
//     setTasks(tasks.map(task => 
//       task.id === selectedTask.id 
//         ? {...task, priority} 
//         : task
//     ));
//     setPriorityModalOpen(false);
//   };

//   const toggleTaskCompletion = (taskId) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId 
//         ? {...task, completed: !task.completed} 
//         : task
//     ));
//   };

//   const deleteTask = (taskId) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   const toggleFlagTask = (taskId) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId 
//         ? {...task, flagged: !task.flagged} 
//         : task
//     ));
//   };

//   const addNewTask = () => {
//     if (newTask.trim()) {
//       setTasks([
//         ...tasks,
//         { 
//           id: Date.now(), 
//           name: newTask, 
//           priority: "least", 
//           completed: false,
//           startDate: new Date(),
//           endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//           flagged: false
//         }
//       ]);
//       setNewTask("");
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 transition-transform z-20 shadow-lg ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
//         <button 
//           className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
//           onClick={() => setSidebarOpen(false)}
//         >
//           ✕
//         </button>
//         <nav className="mt-12 space-y-4">
//           {["Dashboard", "Tasks", "Chatroom"].map((item) => (
//             <div 
//               key={item}
//               className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded transition"
//             >
//               <span>{item}</span>
//             </div>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 ml-0 transition-all">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center mb-6 bg-white rounded-lg shadow-md p-4">
//           {/* Sidebar Toggle */}
//           <button 
//             className="text-2xl text-gray-600 hover:text-gray-800 transition"
//             onClick={() => setSidebarOpen(true)}
//           >
//             <Menu />
//           </button>

//           {/* Time Tracker */}
//           <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-md">
//             <Clock className="text-gray-600" />
//             <span className="text-xl font-bold text-gray-800">
//               {currentTime.toLocaleTimeString()}
//             </span>
//           </div>

//           {/* Break Button */}
//           <button 
//             className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center space-x-2 hover:bg-blue-600 transition"
//             onClick={() => setBreakModalOpen(true)}
//           >
//             <CheckSquare />
//             <span>Mark Break</span>
//           </button>
//         </div> 

//         {/* Week View */}
//         <div className="grid grid-cols-7 gap-2 mb-6 bg-white p-4 rounded-lg shadow-md">
//           {weekData.map((day, index) => (
//             <div 
//               key={index} 
//               className={`p-2 text-center rounded-md text-white font-semibold ${getStatusColor(day.status)} hover:scale-105 transition`}
//             >
//               <div>{day.day}</div>
//               <div>{day.date}</div>
//             </div>
//           ))}
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 gap-6">
//           {/* Tasks Section */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4 text-gray-800">Today's Tasks</h2>
            
//             {/* Add New Task Input */}
//             <div className="flex mb-4">
//               <input 
//                 type="text" 
//                 value={newTask}
//                 onChange={(e) => setNewTask(e.target.value)}
//                 placeholder="Enter new task" 
//                 className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onKeyDown={(e) => e.key === 'Enter' && addNewTask()}
//               />
//               <button 
//                 onClick={addNewTask}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
//               >
//                 Add Task
//               </button>
//             </div>

//             {/* Tasks Table */}
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="p-2 text-left">Task Name</th>
//                     <th className="p-2 text-center">Dates</th>
//                     <th className="p-2 text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tasks.map((task) => (
//                     <tr 
//                       key={task.id} 
//                       className={`border-b hover:bg-gray-50 transition ${task.completed ? 'bg-gray-100' : ''}`}
//                     >
//                       <td className="p-2">
//                         <div className="flex items-center space-x-2">
//                           <span 
//                             className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-800'} flex-grow`}
//                           >
//                             {task.name}
//                           </span>
//                           <button 
//                             onClick={() => openPriorityModal(task)}
//                             className={`transition ${priorityColors[task.priority]} hover:opacity-80`}
//                           >
//                             <Flag fill="currentColor" />
//                           </button>
//                         </div>
//                       </td>
//                       <td className="p-2 text-center text-sm text-gray-600">
//                         <div>{task.startDate.toLocaleDateString()}</div>
//                         <div className="text-xs text-gray-500">to</div>
//                         <div>{task.endDate.toLocaleDateString()}</div>
//                       </td>
//                       <td className="p-2 flex justify-center space-x-2">
//                         <button 
//                           onClick={() => toggleTaskCompletion(task.id)}
//                           className={`p-1 rounded transition ${task.completed ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-200 hover:bg-gray-300'}`}
//                         >
//                           <CheckSquare />
//                         </button>
//                         <button 
//                           onClick={() => deleteTask(task.id)}
//                           className="p-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
//                         >
//                           <Trash2 />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Time Allocation Section */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold mb-4 text-gray-800">Time Allocation</h2>
//             <div className="text-center text-gray-500">
//               Time tracking coming soon...
//             </div>
//           </div>
//         </div>

//         {/* Break Modal */}
//         {breakModalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
//             <div className="bg-white p-6 rounded-lg shadow-xl w-96">
//               <h2 className="text-xl mb-4 text-gray-800 font-semibold">Select Break Type</h2>
//               <div className="space-y-2">
//                 {["Lunch", "Coffee", "Short Walk", "Personal"].map((breakType) => (
//                   <label key={breakType} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded transition cursor-pointer">
//                     <input
//                       type="radio"
//                       name="break"
//                       value={breakType}
//                       checked={selectedBreak === breakType}
//                       onChange={() => setSelectedBreak(breakType)}
//                       className="form-radio"
//                     />
//                     <span className="text-gray-700">{breakType}</span>
//                   </label>
//                 ))}
//               </div>
//               <div className="flex justify-end space-x-2 mt-4">
//                 <button 
//                   className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
//                   onClick={() => setBreakModalOpen(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//                   onClick={() => {
//                     // Logic to handle break selection
//                     setBreakModalOpen(false);
//                   }}
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Priority Selection Modal */}
//         {priorityModalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
//             <div className="bg-white p-6 rounded-lg shadow-xl w-96">
//               <h3 className="text-xl mb-4 text-gray-800 font-semibold">Select Priority</h3>
//               <div className="space-y-2">
//                 {Object.keys(priorityColors).map((priority) => (
//                   <button
//                     key={priority}
//                     onClick={() => changePriority(priority)}
//                     className={`w-full p-2 rounded text-white flex items-center justify-center space-x-2 ${
//                       priority === 'primary' ? 'bg-red-500' : 
//                       priority === 'secondary' ? 'bg-yellow-500' : 
//                       'bg-green-500'
//                     } hover:opacity-90 transition`}
//                   >
//                     <Flag fill="white" />
//                     <span>{priority}</span>
//                   </button>
//                 ))}
//               </div>
//               <button 
//                 onClick={() => setPriorityModalOpen(false)}
//                 className="mt-4 w-full bg-gray-200 p-2 rounded hover:bg-gray-300 transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from "react";
// import { Menu, Clock, CheckSquare, Trash2, Flag, ChevronLeft, ChevronRight } from "lucide-react";

// const App = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [breakModalOpen, setBreakModalOpen] = useState(false);
//   const [selectedBreak, setSelectedBreak] = useState("");
//   const [priorityModalOpen, setPriorityModalOpen] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [newTask, setNewTask] = useState("");
//   const [weekView, setWeekView] = useState("current"); // "past", "current"

//   // Update week data to match Figma (January dates)
//   const [weekData, setWeekData] = useState([
//     { day: "Monday", date: "1", status: "present" },
//     { day: "Tuesday", date: "2", status: "upcoming" },
//     { day: "Wednesday", date: "3", status: "upcoming" },
//     { day: "Thursday", date: "4", status: "upcoming" },
//     { day: "Friday", date: "5", status: "upcoming" },
//     { day: "Saturday", date: "6", status: "upcoming" },
//     { day: "Sunday", date: "7", status: "upcoming" }
//   ]);

//   // Past week data
//   const pastWeekData = [
//     { day: "Monday", date: "25", status: "present" },
//     { day: "Tuesday", date: "26", status: "absent" },
//     { day: "Wednesday", date: "27", status: "present" },
//     { day: "Thursday", date: "28", status: "present" },
//     { day: "Friday", date: "29", status: "absent" },
//     { day: "Saturday", date: "30", status: "upcoming" },
//     { day: "Sunday", date: "31", status: "upcoming" }
//   ];

//   // Update tasks to match Figma
//   const [tasks, setTasks] = useState([
//     { 
//       id: 1, 
//       name: "coding", 
//       priority: "least", 
//       completed: false,
//       startDate: new Date('2025-03-29'),
//       endDate: new Date('2025-03-30'),
//       flagged: false
//     },
//     { 
//       id: 2, 
//       name: "Learning", 
//       priority: "primary", 
//       completed: false,
//       startDate: new Date('2025-03-24'),
//       endDate: new Date('2025-03-25'),
//       flagged: true
//     }
//   ]);

//   const priorityColors = {
//     primary: "text-red-500",
//     secondary: "text-yellow-500",
//     least: "text-green-500"
//   };

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const getStatusColor = (status) => {
//     switch(status) {
//       case "present": return "bg-pink-300";
//       case "absent": return "bg-red-200";
//       case "upcoming": return "bg-white";
//       default: return "bg-white";
//     }
//   };

//   const openPriorityModal = (task) => {
//     setSelectedTask(task);
//     setPriorityModalOpen(true);
//   };

//   const changePriority = (priority) => {
//     setTasks(tasks.map(task => 
//       task.id === selectedTask.id 
//         ? {...task, priority} 
//         : task
//     ));
//     setPriorityModalOpen(false);
//   };

//   const toggleTaskCompletion = (taskId) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId 
//         ? {...task, completed: !task.completed} 
//         : task
//     ));
//   };

//   const deleteTask = (taskId) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   const toggleFlagTask = (taskId) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId 
//         ? {...task, flagged: !task.flagged} 
//         : task
//     ));
//   };

//   const addNewTask = () => {
//     if (newTask.trim()) {
//       setTasks([
//         ...tasks,
//         { 
//           id: Date.now(), 
//           name: newTask, 
//           priority: "least", 
//           completed: false,
//           startDate: new Date(),
//           endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//           flagged: false
//         }
//       ]);
//       setNewTask("");
//     }
//   };

//   // Format date as DD-MM-YYYY
//   const formatDate = (date) => {
//     return date.toLocaleDateString('en-GB', {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric'
//     }).replace(/\//g, '-');
//   };

//   // Toggle between current and past week
//   const toggleWeekView = () => {
//     setWeekView(weekView === "current" ? "past" : "current");
//   };

//   return (
//     <div className="flex h-screen bg-white">
//       {/* Sidebar */}
//       <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 transition-transform z-20 shadow-lg ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
//         <button 
//           className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
//           onClick={() => setSidebarOpen(false)}
//         >
//           ✕
//         </button>
//         <nav className="mt-12 space-y-4">
//           {["Dashboard", "Tasks", "Chatroom"].map((item) => (
//             <div 
//               key={item}
//               className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded transition"
//             >
//               <span>{item}</span>
//             </div>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 ml-0 transition-all">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center mb-6">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="bg-pink-200 rounded-full p-2 w-12 h-12 flex items-center justify-center">
//               <span className="font-bold">PP</span>
//             </div>
//             <span className="ml-2 text-lg font-semibold">Productive Pulse</span>
//           </div>

//           {/* Time Tracker */}
//           <div className="flex items-center space-x-2 bg-gray-200 px-6 py-2 rounded-full">
//             <span className="text-xl font-bold text-gray-800">
//               {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}
//             </span>
//           </div>

//           {/* Break Button */}
//           <button 
//             className="px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition"
//             onClick={() => setBreakModalOpen(true)}
//           >
//             <span>Break</span>
//           </button>
//         </div> 

//         {/* This Week Section */}
//         <div className="mb-8 relative">
//           <h2 className="text-2xl font-medium text-pink-400 mb-4 text-center">
//             {weekView === "current" ? "This Week" : "Past Week"}
//           </h2>

//           {/* Left arrow for navigation */}
//           <button 
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 text-pink-400 hover:text-pink-600"
//             onClick={toggleWeekView}
//           >
//             <ChevronLeft size={24} />
//           </button>

//           {/* Only show right arrow if in past week view */}
//           {weekView === "past" && (
//             <button 
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 text-pink-400 hover:text-pink-600"
//               onClick={toggleWeekView}
//             >
//               <ChevronRight size={24} />
//             </button>
//           )}

//           <div className="grid grid-cols-7 gap-0 border border-gray-200 rounded-lg overflow-hidden">
//             {(weekView === "current" ? weekData : pastWeekData).map((day, index) => (
//               <div 
//                 key={index} 
//                 className={`p-4 text-center ${getStatusColor(day.status)} border border-gray-200 relative`}
//               >
//                 {day.status === "present" && (
//                   <div className="absolute top-2 left-0 right-0 text-white text-xs font-medium">
//                     PRESENT
//                   </div>
//                 )}
//                 <div className={`${day.status === "present" ? "text-white" : "text-gray-600"} font-medium ${day.status === "absent" ? "line-through" : ""}`}>
//                   {day.day}
//                 </div>
//                 <div className={`${day.status === "present" ? "text-white" : "text-gray-600"} ${day.status === "absent" ? "line-through" : ""}`}>
//                   {day.date} January
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* My Tasks Section */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-medium text-pink-400 mb-4 text-center">My Tasks</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="p-2 text-left border border-gray-200">Sl No</th>
//                   <th className="p-2 text-left border border-gray-200">PRIORITY</th>
//                   <th className="p-2 text-left border border-gray-200">TASK DETAILS</th>
//                   <th className="p-2 text-left border border-gray-200">START DATE</th>
//                   <th className="p-2 text-left border border-gray-200">END DATE</th>
//                   <th className="p-2 text-center border border-gray-200">DONE</th>
//                   <th className="p-2 text-center border border-gray-200">DELETE</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tasks.map((task, index) => (
//                   <tr key={task.id}>
//                     <td className="p-2 border border-gray-200">{index + 1}</td>
//                     <td className="p-2 border border-gray-200">
//                       <button onClick={() => openPriorityModal(task)}>
//                         {task.priority === "primary" && <Flag fill="red" color="red" />}
//                         {task.priority === "secondary" && <Flag fill="yellow" color="yellow" />}
//                         {task.priority === "least" && <Flag fill="green" color="green" />}
//                       </button>
//                     </td>
//                     <td className="p-2 border border-gray-200">{task.name}</td>
//                     <td className="p-2 border border-gray-200">
//                       {formatDate(task.startDate)}
//                     </td>
//                     <td className="p-2 border border-gray-200">
//                       {task.name === "coding" ? "Ongoing" : formatDate(task.endDate)}
//                     </td>
//                     <td className="p-2 border border-gray-200 text-center">
//                       <input 
//                         type="checkbox" 
//                         checked={task.completed}
//                         onChange={() => toggleTaskCompletion(task.id)}
//                         className="h-4 w-4"
//                       />
//                     </td>
//                     <td className="p-2 border border-gray-200 text-center">
//                       <button onClick={() => deleteTask(task.id)}>
//                         <Trash2 size={16} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="flex justify-end mt-4">
//             <button 
//               className="px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition"
//               onClick={() => {
//                 document.getElementById("newTaskInput").focus();
//               }}
//             >
//               New Task
//             </button>
//           </div>
//           <div className="mt-4 flex">
//             <input 
//               id="newTaskInput"
//               type="text" 
//               value={newTask}
//               onChange={(e) => setNewTask(e.target.value)}
//               placeholder="Enter new task" 
//               className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-300"
//               onKeyDown={(e) => e.key === 'Enter' && addNewTask()}
//             />
//             <button 
//               onClick={addNewTask}
//               className="bg-pink-400 text-white px-4 py-2 rounded-r-md hover:bg-pink-500 transition"
//             >
//               Add Task
//             </button>
//           </div>
//         </div>

//         {/* Yesterday & Today Section */}
//         <div className="grid grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-2xl font-medium text-pink-400 mb-4 text-center">Yesterday</h2>
//             <div className="border border-gray-200 rounded-lg p-4">
//               {/* SVG Analytics Chart for Yesterday */}
//               <svg width="100%" height="420" viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
//                 {/* Semi-circle chart */}
//                 <g transform="translate(150, 100)">
//                   <path d="M0,0 L-70,70 A100,100 0 0,0 -70,-70 Z" fill="#FF7F7F" />
//                   <path d="M0,0 L-70,-70 A100,100 0 0,0 70,-70 Z" fill="#006D77" />
//                   <path d="M0,0 L70,-70 A100,100 0 0,0 70,70 Z" fill="#83C5BE" />
//                   <path d="M0,0 L70,70 A100,100 0 0,0 -70,70 Z" fill="#FFDDA1" />
//                   <text x="-40" y="0" fill="white" fontWeight="bold" fontSize="24">10%</text>
//                   <text x="-10" y="-40" fill="white" fontWeight="bold" fontSize="24">20%</text>
//                   <text x="20" y="0" fill="white" fontWeight="bold" fontSize="24">30%</text>
//                   <text x="-10" y="40" fill="white" fontWeight="bold" fontSize="24">40%</text>
//                 </g>

//                 {/* Legend */}
//                 <g transform="translate(300, 80)">
//                   <circle cx="10" cy="10" r="6" fill="#FFDDA1" />
//                   <text x="25" y="15" fill="#006D77">Lorem ipsum</text>
                  
//                   <circle cx="10" cy="40" r="6" fill="#83C5BE" />
//                   <text x="25" y="45" fill="#006D77">Lorem ipsum</text>
                  
//                   <circle cx="10" cy="70" r="6" fill="#006D77" />
//                   <text x="25" y="75" fill="#006D77">Lorem ipsum</text>
                  
//                   <circle cx="10" cy="100" r="6" fill="#FF7F7F" />
//                   <text x="25" y="105" fill="#006D77">Lorem ipsum</text>
//                 </g>

//                 {/* Line graph */}
//                 <g transform="translate(50, 280)">
//                   <rect x="0" y="0" width="400" height="120" fill="none" stroke="#ccc" strokeWidth="1" />
                  
//                   {/* Grid lines */}
//                   {[0, 1, 2, 3, 4].map((i) => (
//                     <line 
//                       key={i}
//                       x1="0" 
//                       y1={i * 30} 
//                       x2="400" 
//                       y2={i * 30} 
//                       stroke="#ccc" 
//                       strokeWidth="1" 
//                     />
//                   ))}
                  
//                   {/* Y-axis labels */}
//                   <text x="-10" y="5" textAnchor="end" fill="#006D77" fontSize="12">150</text>
//                   <text x="-10" y="35" textAnchor="end" fill="#006D77" fontSize="12">120</text>
//                   <text x="-10" y="65" textAnchor="end" fill="#006D77" fontSize="12">90</text>
//                   <text x="-10" y="95" textAnchor="end" fill="#006D77" fontSize="12">60</text>
//                   <text x="-10" y="125" textAnchor="end" fill="#006D77" fontSize="12">30</text>
                  
//                   {/* X-axis labels */}
//                   {["2016", "2017", "2018", "2019", "2020", "2021"].map((year, i) => (
//                     <text 
//                       key={i}
//                       x={i * 66 + 33} 
//                       y="140" 
//                       textAnchor="middle" 
//                       fill="#006D77" 
//                       fontSize="12"
//                     >
//                       {year}
//                     </text>
//                   ))}
                  
//                   {/* Area charts */}
//                   <path 
//                     d="M0,90 L66,60 L132,40 L198,70 L264,50 L330,30 L396,60 L396,120 L0,120 Z" 
//                     fill="#FFDDA1" 
//                     opacity="0.8" 
//                   />
//                   <path 
//                     d="M0,90 L66,60 L132,40 L198,70 L264,50 L330,30 L396,60 L396,120 L0,120 Z" 
//                     fill="none" 
//                     stroke="#FFB74D" 
//                     strokeWidth="2" 
//                   />
                  
//                   <path 
//                     d="M0,120 L66,100 L132,80 L198,100 L264,90 L330,70 L396,100 L396,120 Z" 
//                     fill="#FF7F7F" 
//                     opacity="0.8" 
//                   />
                  
//                   {/* Data points */}
//                   <circle cx="132" cy="40" r="5" fill="white" stroke="#006D77" strokeWidth="2" />
//                   <text x="132" y="30" textAnchor="middle" fill="#006D77" fontWeight="bold">70</text>
                  
//                   <circle cx="264" cy="50" r="5" fill="white" stroke="#006D77" strokeWidth="2" />
//                   <text x="264" y="40" textAnchor="middle" fill="#006D77" fontWeight="bold">57</text>
//                 </g>

//                 {/* Circular progress indicators */}
//                 <g transform="translate(100, 550)">
//                   <circle cx="50" cy="50" r="40" fill="none" stroke="#FFE0E0" strokeWidth="10" />
//                   <circle 
//                     cx="50" 
//                     cy="50" 
//                     r="40" 
//                     fill="none" 
//                     stroke="#FF7F7F" 
//                     strokeWidth="10" 
//                     strokeDasharray="251.2" 
//                     strokeDashoffset="175.84" 
//                   />
//                   <text x="50" y="55" textAnchor="middle" fill="#FF7F7F" fontWeight="bold" fontSize="20">30%</text>
                  
//                   <circle cx="160" cy="50" r="40" fill="none" stroke="#D6EFEF" strokeWidth="10" />
//                   <circle 
//                     cx="160" 
//                     cy="50" 
//                     r="40" 
//                     fill="none" 
//                     stroke="#006D77" 
//                     strokeWidth="10" 
//                     strokeDasharray="251.2" 
//                     strokeDashoffset="125.6" 
//                   />
//                   <text x="160" y="55" textAnchor="middle" fill="#006D77" fontWeight="bold" fontSize="20">50%</text>
                  
//                   <circle cx="270" cy="50" r="40" fill="none" stroke="#FFEFD5" strokeWidth="10" />
//                   <circle 
//                     cx="270" 
//                     cy="50" 
//                     r="40" 
//                     fill="none" 
//                     stroke="#FFB74D" 
//                     strokeWidth="10" 
//                     strokeDasharray="251.2" 
//                     strokeDashoffset="25.12" 
//                   />
//                   <text x="270" y="55" textAnchor="middle" fill="#FFB74D" fontWeight="bold" fontSize="20">90%</text>
//                 </g>
//               </svg>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-2xl font-medium text-pink-400 mb-4 text-center">Today</h2>
//             <div className="border border-gray-200 rounded-lg p-4">
//               {/* SVG Analytics Chart for Today */}
//               <svg width="100%" height="420" viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
//                 {/* Detailed pie chart */}
//                 <g transform="translate(440, 180)">
//                   <path d="M0,0 L0,-100 A100,100 0 0,1 86.6,-50 Z" fill="#FFDDA1" />
//                   <path d="M0,0 L86.6,-50 A100,100 0 0,1 86.6,50 Z" fill="#83C5BE" />
//                   <path d="M0,0 L86.6,50 A100,100 0 0,1 0,100 Z" fill="#006D77" />
//                   <path d="M0,0 L0,100 A100,100 0 0,1 -86.6,50 Z" fill="#FF7F7F" />
//                   <text x="50" y="-40" fill="white" fontWeight="bold" fontSize="24">40%</text>
//                   <text x="50" y="0" fill="white" fontWeight="bold" fontSize="24">30%</text>
//                   <text x="0" y="50" fill="white" fontWeight="bold" fontSize="24">20%</text>
//                   <text x="-50" y="0" fill="white" fontWeight="bold" fontSize="24">10%</text>
//                 </g>

//                 {/* Labels with lines pointing to sections */}
//                 <g transform="translate(440, 180)">
//                   <line x1="70" y1="-70" x2="120" y2="-100" stroke="#006D77" strokeWidth="1" />
//                   <text x="130" y="-105" fill="#006D77" fontSize="12" fontWeight="bold">Lorem ipsum</text>
//                   <text x="130" y="-90" fill="#006D77" fontSize="10">Lorem ipsum dolor sit amet</text>
                  
//                   <line x1="100" y1="0" x2="150" y2="0" stroke="#006D77" strokeWidth="1" />
//                   <text x="160" y="-5" fill="#006D77" fontSize="12" fontWeight="bold">Lorem ipsum</text>
//                   <text x="160" y="10" fill="#006D77" fontSize="10">Lorem ipsum dolor sit amet</text>
                  
//                   <line x1="0" y1="110" x2="0" y2="150" stroke="#006D77" strokeWidth="1" />
//                   <text x="10" y="165" fill="#006D77" fontSize="12" fontWeight="bold">Lorem ipsum</text>
//                   <text x="10" y="180" fill="#006D77" fontSize="10">Lorem ipsum dolor sit amet</text>
//                 </g>

//                 {/* Semi-circle chart (similar to yesterday) */}
//                 <g transform="translate(150, 100)">
//                   <path d="M0,0 L-70,70 A100,100 0 0,0 -70,-70 Z" fill="#FF7F7F" />
//                   <path d="M0,0 L-70,-70 A100,100 0 0,0 70,-70 Z" fill="#006D77" />
//                   <path d="M0,0 L70,-70 A100,100 0 0,0 70,70 Z" fill="#83C5BE" />
//                   <path d="M0,0 L70,70 A100,100 0 0,0 -70,70 Z" fill="#FFDDA1" />
//                   <text x="-40" y="0" fill="white" fontWeight="bold" fontSize="24">10%</text>
//                   <text x="-10" y="-40" fill="white" fontWeight="bold" fontSize="24">20%</text>
//                   <text x="20" y="0" fill="white" fontWeight="bold" fontSize="24">30%</text>
//                   <text x="-10" y="40" fill="white" fontWeight="bold" fontSize="24">40%</text>
//                 </g>

//                 {/* Legend (similar to yesterday) */}
//                 <g transform="translate(300, 80)">
//                   <circle cx="10" cy="10" r="6" fill="#FFDDA1" />
//                   <text x="25" y="15" fill="#006D77">Lorem ipsum</text>
                  
//                   <circle cx="10" cy="40" r="6" fill="#83C5BE" />
//                   <text x="25" y="45" fill="#006D77">Lorem ipsum</text>
                  
//                   <circle cx="10" cy="70" r="6" fill="#006D77" />
//                   <text x="25" y="75" fill="#006D77">Lorem ipsum</text>
                  
//                   <circle cx="10" cy="100" r="6" fill="#FF7F7F" />
//                   <text x="25" y="105" fill="#006D77">Lorem ipsum</text>
//                 </g>

//                 {/* Section labels A, B, C */}
//                 <g transform="translate(310, 250)">
//                   <rect x="0" y="0" width="40" height="40" fill="white" stroke="#006D77" strokeWidth="2" />
//                   <text x="20" y="25" textAnchor="middle" fill="#006D77" fontWeight="bold" fontSize="24">A</text>
                  
//                   <rect x="40" y="0" width="200" height="40" fill="white" stroke="#006D77" strokeWidth="2" />
//                   <text x="140" y="25" textAnchor="middle" fill="#006D77">Lorem ipsum dolor sit</text>
                  
//                   <rect x="0" y="50" width="40" height="40" fill="white" stroke="#FF7F7F" strokeWidth="2" />
//                   <text x="20" y="75" textAnchor="middle" fill="#FF7F7F" fontWeight="bold" fontSize="24">B</text>
                  
//                   <rect x="40" y="50" width="200" height="40" fill="white" stroke="#FF7F7F" strokeWidth="2" />
//                   <text x="140" y="75" textAnchor="middle" fill="#006D77">Lorem ipsum dolor sit</text>
                  
//                   <rect x="0" y="100" width="40" height="40" fill="white" stroke="#FFDDA1" strokeWidth="2" />
//                   <text x="20" y="125" textAnchor="middle" fill="#FFDDA1" fontWeight="bold" fontSize="24">C</text>
                  
//                   <rect x="40" y="100" width="200" height="40" fill="white" stroke="#FFDDA1" strokeWidth="2" />
//                   <text x="140" y="125" textAnchor="middle" fill="#006D77">Lorem ipsum dolor sit</text>
//                 </g>
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Break Modal */}
//         {breakModalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
//             <div className="bg-white p-6 rounded-lg shadow-xl w-96">
//               <h2 className="text-xl mb-4 text-gray-800 font-semibold">Select Break Type</h2>
//               <div className="space-y-2">
//                 {["Lunch", "Coffee", "Short Walk", "Personal"].map((breakType) => (
//                   <label key={breakType} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded transition cursor-pointer">
//                     <input
//                       type="radio"
//                       name="break"
//                       value={breakType}
//                       checked={selectedBreak === breakType}
//                       onChange={() => setSelectedBreak(breakType)}
//                       className="form-radio"
//                     />
//                     <span className="text-gray-700">{breakType}</span>
//                   </label>
//                 ))}
//               </div>
//               <div className="flex justify-end space-x-2 mt-4">
//                 <button 
//                   className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
//                   onClick={() => setBreakModalOpen(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   className="px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500 transition"
//                   onClick={() => {
//                     // Logic to handle break selection
//                     setBreakModalOpen(false);
//                   }}
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Priority Modal */}
//         {priorityModalOpen && selectedTask && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
//             <div className="bg-white p-6 rounded-lg shadow-xl w-96">
//               <h2 className="text-xl mb-4 text-gray-800 font-semibold">Change Task Priority</h2>
//               <div className="flex flex-col space-y-2">
//                 {["least", "secondary", "primary"].map((priority) => (
//                   <button 
//                     key={priority} 
//                     className={`px-4 py-2 rounded ${priorityColors[priority]} text-white`}
//                     onClick={() => changePriority(priority)}
//                   >
//                     {priority.charAt(0).toUpperCase() + priority.slice(1)}
//                   </button>
//                 ))}
//               </div>
//               <div className="flex justify-end space-x-2 mt-4">
//                 <button
//                   className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
//                   onClick={() => setPriorityModalOpen(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from "react";
// import { Menu, Clock, CheckSquare, Trash2, Flag, ChevronLeft, ChevronRight } from "lucide-react";

// const App = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [breakModalOpen, setBreakModalOpen] = useState(false);
//   const [selectedBreak, setSelectedBreak] = useState("");
//   const [priorityModalOpen, setPriorityModalOpen] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [newTask, setNewTask] = useState("");
//   const [weekView, setWeekView] = useState("current");

//   const [weekData, setWeekData] = useState([
//     { day: "Monday", date: "1", status: "present" },
//     { day: "Tuesday", date: "2", status: "upcoming" },
//     { day: "Wednesday", date: "3", status: "upcoming" },
//     { day: "Thursday", date: "4", status: "upcoming" },
//     { day: "Friday", date: "5", status: "upcoming" },
//     { day: "Saturday", date: "6", status: "upcoming" },
//     { day: "Sunday", date: "7", status: "upcoming" }
//   ]);

//   const pastWeekData = [
//     { day: "Monday", date: "25", status: "present" },
//     { day: "Tuesday", date: "26", status: "absent" },
//     { day: "Wednesday", date: "27", status: "present" },
//     { day: "Thursday", date: "28", status: "present" },
//     { day: "Friday", date: "29", status: "absent" },
//     { day: "Saturday", date: "30", status: "upcoming" },
//     { day: "Sunday", date: "31", status: "upcoming" }
//   ];

//   const [tasks, setTasks] = useState([
//     { 
//       id: 1, 
//       name: "Coding", 
//       priority: "least", 
//       completed: false,
//       startDate: new Date('2025-03-29'),
//       endDate: new Date('2025-03-30'),
//       flagged: false
//     },
//     { 
//       id: 2, 
//       name: "Learning", 
//       priority: "primary", 
//       completed: false,
//       startDate: new Date('2025-03-24'),
//       endDate: new Date('2025-03-25'),
//       flagged: true
//     }
//   ]);

//   const priorityColors = {
//     primary: "bg-red-500",
//     secondary: "bg-yellow-500",
//     least: "bg-green-500"
//   };

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const getStatusColor = (status) => {
//     switch(status) {
//       case "present": return "bg-pink-300";
//       case "absent": return "bg-red-200";
//       case "upcoming": return "bg-white";
//       default: return "bg-white";
//     }
//   };

//   const openPriorityModal = (task) => {
//     setSelectedTask(task);
//     setPriorityModalOpen(true);
//   };

//   const changePriority = (priority) => {
//     setTasks(tasks.map(task => 
//       task.id === selectedTask.id 
//         ? {...task, priority} 
//         : task
//     ));
//     setPriorityModalOpen(false);
//   };

//   const toggleTaskCompletion = (taskId) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId 
//         ? {...task, completed: !task.completed} 
//         : task
//     ));
//   };

//   const deleteTask = (taskId) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   const toggleFlagTask = (taskId) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId 
//         ? {...task, flagged: !task.flagged} 
//         : task
//     ));
//   };

//   const addNewTask = () => {
//     if (newTask.trim()) {
//       setTasks([
//         ...tasks,
//         { 
//           id: Date.now(), 
//           name: newTask, 
//           priority: "least", 
//           completed: false,
//           startDate: new Date(),
//           endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//           flagged: false
//         }
//       ]);
//       setNewTask("");
//     }
//   };

//   const formatDate = (date) => {
//     return date.toLocaleDateString('en-GB', {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric'
//     }).replace(/\//g, '-');
//   };

//   const toggleWeekView = () => {
//     setWeekView(weekView === "current" ? "past" : "current");
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 transition-transform z-20 shadow-lg ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
//         <button 
//           className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
//           onClick={() => setSidebarOpen(false)}
//         >
//           ✕
//         </button>
//         <nav className="mt-12 space-y-4">
//           {["Dashboard", "Tasks", "Chatroom"].map((item) => (
//             <div 
//               key={item}
//               className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded transition"
//             >
//               <span>{item}</span>
//             </div>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 ml-0 transition-all">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center mb-6">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="bg-pink-200 rounded-full p-2 w-12 h-12 flex items-center justify-center">
//               <span className="font-bold">PP</span>
//             </div>
//             <span className="ml-2 text-lg font-semibold">Productive Pulse</span>
//           </div>

//           {/* Time Tracker */}
//           <div className="flex items-center space-x-2 bg-gray-200 px-6 py-2 rounded-full">
//             <span className="text-xl font-bold text-gray-800">
//               {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}
//             </span>
//           </div>

//           {/* Break Button */}
//           <button 
//             className="px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition"
//             onClick={() => setBreakModalOpen(true)}
//           >
//             <span>Break</span>
//           </button>
//         </div> 

//         {/* This Week Section */}
//         <div className="mb-8 relative">
//           <h2 className="text-2xl font-medium text-pink-400 mb-4 text-center">
//             {weekView === "current" ? "This Week" : "Past Week"}
//           </h2>

//           {/* Left arrow for navigation */}
//           <button 
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 text-pink-400 hover:text-pink-600"
//             onClick={toggleWeekView}
//           >
//             <ChevronLeft size={24} />
//           </button>

//           {/* Only show right arrow if in past week view */}
//           {weekView === "past" && (
//             <button 
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 text-pink-400 hover:text-pink-600"
//               onClick={toggleWeekView}
//             >
//               <ChevronRight size={24} />
//             </button>
//           )}

//           <div className="grid grid-cols-7 gap-0 border border-gray-200 rounded-lg overflow-hidden">
//             {(weekView === "current" ? weekData : pastWeekData).map((day, index) => (
//               <div 
//                 key={index} 
//                 className={`p-4 text-center ${getStatusColor(day.status)} border border-gray-200 relative`}
//               >
//                 {day.status === "present" && (
//                   <div className="absolute top-2 left-0 right-0 text-white text-xs font-medium">
//                     PRESENT
//                   </div>
//                 )}
//                 <div className={`${day.status === "present" ? "text-white" : "text-gray-600"} font-medium ${day.status === "absent" ? "line-through" : ""}`}>
//                   {day.day}
//                 </div>
//                 <div className={`${day.status === "present" ? "text-white" : "text-gray-600"} ${day.status === "absent" ? "line-through" : ""}`}>
//                   {day.date} January
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* My Tasks Section */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-medium text-pink-400 mb-4 text-center">My Tasks</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="p-2 text-left border border-gray-200">Sl No</th>
//                   <th className="p-2 text-left border border-gray-200">PRIORITY</th>
//                   <th className="p-2 text-left border border-gray-200">TASK DETAILS</th>
//                   <th className="p-2 text-left border border-gray-200">START DATE</th>
//                   <th className="p-2 text-left border border-gray-200">END DATE</th>
//                   <th className="p-2 text-center border border-gray-200">DONE</th>
//                   <th className="p-2 text-center border border-gray-200">DELETE</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tasks.map((task, index) => (
//                   <tr key={task.id}>
//                     <td className="p-2 border border-gray-200">{index + 1}</td>
//                     <td className="p-2 border border-gray-200">
//                       <button onClick={() => openPriorityModal(task)}>
//                         <div className={`w-4 h-4 rounded-full ${priorityColors[task.priority]}`}></div>
//                       </button>
//                     </td>
//                     <td className="p-2 border border-gray-200">{task.name}</td>
//                     <td className="p-2 border border-gray-200">
//                       {formatDate(task.startDate)}
//                     </td>
//                     <td className="p-2 border border-gray-200">
//                       {task.name === "Coding" ? "Ongoing" : formatDate(task.endDate)}
//                     </td>
//                     <td className="p-2 border border-gray-200 text-center">
//                       <input 
//                         type="checkbox" 
//                         checked={task.completed}
//                         onChange={() => toggleTaskCompletion(task.id)}
//                         className="h-4 w-4"
//                       />
//                     </td>
//                     <td className="p-2 border border-gray-200 text-center">
//                       <button onClick={() => deleteTask(task.id)}>
//                         <Trash2 size={16} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="flex justify-end mt-4">
//             <button 
//               className="px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition"
//               onClick={() => {
//                 document.getElementById("newTaskInput").focus();
//               }}
//             >
//               New Task
//             </button>
//           </div>
//           <div className="mt-4 flex">
//             <input 
//               id="newTaskInput"
//               type="text" 
//               value={newTask}
//               onChange={(e) => setNewTask(e.target.value)}
//               placeholder="Enter new task" 
//               className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-300"
//               onKeyDown={(e) => e.key === 'Enter' && addNewTask()}
//             />
//             <button 
//               onClick={addNewTask}
//               className="bg-pink-400 text-white px-4 py-2 rounded-r-md hover:bg-pink-500 transition"
//             >
//               Add Task
//             </button>
//           </div>
//         </div>

//         {/* Break Modal */}
//         {breakModalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
//             <div className="bg-white p-6 rounded-lg shadow-xl w-96">
//               <h2 className="text-xl mb-4 text-gray-800 font-semibold">Select Break Type</h2>
//               <div className="space-y-2">
//                 {["Lunch", "Coffee", "Short Walk", "Personal"].map((breakType) => (
//                   <label key={breakType} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded transition cursor-pointer">
//                     <input
//                       type="radio"
//                       name="break"
//                       value={breakType}
//                       checked={selectedBreak === breakType}
//                       onChange={() => setSelectedBreak(breakType)}
//                       className="form-radio"
//                     />
//                     <span className="text-gray-700">{breakType}</span>
//                   </label>
//                 ))}
//               </div>
//               <div className="flex justify-end space-x-2 mt-4">
//                 <button 
//                   className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
//                   onClick={() => setBreakModalOpen(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   className="px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500 transition"
//                   onClick={() => {
//                     // Logic to handle break selection
//                     setBreakModalOpen(false);
//                   }}
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Priority Modal */}
//         {priorityModalOpen && selectedTask && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
//             <div className="bg-white p-6 rounded-lg shadow-xl w-96">
//               <h2 className="text-xl mb-4 text-gray-800 font-semibold">Change Task Priority</h2>
//               <div className="flex flex-col space-y-2">
//                 {["least", "secondary", "primary"].map((priority) => (
//                   <button 
//                     key={priority} 
//                     className={`px-4 py-2 rounded ${priorityColors[priority]} text-white`}
//                     onClick={() => changePriority(priority)}
//                   >
//                     {priority.charAt(0).toUpperCase() + priority.slice(1)}
//                   </button>
//                 ))}
//               </div>
//               <div className="flex justify-end space-x-2 mt-4">
//                 <button
//                   className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
//                   onClick={() => setPriorityModalOpen(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from "react";
import { Menu, Clock, CheckSquare, Trash2, Flag, ChevronLeft, ChevronRight, X, PieChart, Calendar } from "lucide-react";

const ProductivityPulseApp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [breakModalOpen, setBreakModalOpen] = useState(false);
  const [selectedBreak, setSelectedBreak] = useState("");
  const [priorityModalOpen, setPriorityModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [newTask, setNewTask] = useState("");
  const [weekView, setWeekView] = useState("current");
  const [activeView, setActiveView] = useState("tasks"); // 'tasks', 'today', 'yesterday'

  const [weekData, setWeekData] = useState([
    { day: "Monday", date: "25", status: "present" },
    { day: "Tuesday", date: "26", status: "present" },
    { day: "Wednesday", date: "27", status: "present" },
    { day: "Thursday", date: "28", status: "present" },
    { day: "Friday", date: "29", status: "present" },
    { day: "Saturday", date: "30", status: "upcoming" },
    { day: "Sunday", date: "31", status: "upcoming" }
  ]);

  const pastWeekData = [
    { day: "Monday", date: "18", status: "present" },
    { day: "Tuesday", date: "19", status: "absent" },
    { day: "Wednesday", date: "20", status: "present" },
    { day: "Thursday", date: "21", status: "present" },
    { day: "Friday", date: "22", status: "absent" },
    { day: "Saturday", date: "23", status: "upcoming" },
    { day: "Sunday", date: "24", status: "upcoming" }
  ];

  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      name: "Coding", 
      priority: "least", 
      completed: false,
      startDate: new Date('2025-03-29'),
      endDate: new Date('2025-03-30'),
      flagged: false
    },
    { 
      id: 2, 
      name: "Learning", 
      priority: "primary", 
      completed: false,
      startDate: new Date('2025-03-24'),
      endDate: new Date('2025-03-25'),
      flagged: true
    }
  ]);

  const priorityColors = {
    primary: "bg-red-500",
    secondary: "bg-yellow-500",
    least: "bg-green-500"
  };

  // Today's stats
  const todayStats = {
    learning: 35,
    coding: 55,
    browser: 10
  };

  // Yesterday's stats
  const yesterdayStats = {
    learning: 40,
    coding: 45,
    browser: 15
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case "present": return "bg-pink-400";
      case "absent": return "bg-red-200";
      case "upcoming": return "bg-white";
      default: return "bg-white";
    }
  };

  const openPriorityModal = (task) => {
    setSelectedTask(task);
    setPriorityModalOpen(true);
  };

  const changePriority = (priority) => {
    setTasks(tasks.map(task => 
      task.id === selectedTask.id 
        ? {...task, priority} 
        : task
    ));
    setPriorityModalOpen(false);
  };

//   const toggleTaskCompletion = (taskId) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId 
//         ? {...task, completed: !task.completed} 
//         : task
//     ));
//   };

const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
          endDate: !task.completed ? new Date() : task.endDate // Set end date to now if marking as done
        };
      }
      return task;
    }));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleFlagTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? {...task, flagged: !task.flagged} 
        : task
    ));
  };

  const addNewTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { 
          id: Date.now(), 
          name: newTask, 
          priority: "least", 
          completed: false,
          startDate: new Date(),
        //   endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          endDate: "Ongoing",
          flagged: false
        }
      ]);
      setNewTask("");
    }
  };

  const formatDate = (date) => {

    const dateObj = date instanceof Date ? date : new Date(date);

    if(isNaN(dateObj.getTime())){
        console.error('Invalid date:', date);
        return 'Invalid date';
    }

    return dateObj.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-');
  };

  const toggleWeekView = () => {
    setWeekView(weekView === "current" ? "past" : "current");
  };

  // Render pie chart for statistics
  const PieChartComponent = ({ data, title }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-gray-700 mb-4">{title}</h3>
        <div className="flex space-x-8">
          <div className="w-24 h-24 relative">
            <div className="w-full h-full rounded-full overflow-hidden" style={{ 
              background: `conic-gradient(
                #f87171 0% ${data.learning}%, 
                #60a5fa ${data.learning}% ${data.learning + data.coding}%, 
                #34d399 ${data.learning + data.coding}% 100%
              )`
            }}></div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-red-400 rounded-sm mr-2"></div>
              <span className="text-sm">Learning</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-blue-400 rounded-sm mr-2"></div>
              <span className="text-sm">Coding</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-sm mr-2"></div>
              <span className="text-sm">Browser</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-1 text-left font-medium">Category</th>
                <th className="py-1 text-left font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1">Learning</td>
                <td className="py-1">2h 45m</td>
              </tr>
              <tr>
                <td className="py-1">Coding</td>
                <td className="py-1">4h 10m</td>
              </tr>
              <tr>
                <td className="py-1">Browser</td>
                <td className="py-1">0h 45m</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-pink-500 text-white p-5 shadow-lg z-20 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <button 
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={20} />
        </button>
        
        {/* User info */}
        <div className="mt-8 mb-6 flex items-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pink-500 font-bold">
            AP
          </div>
          <div className="ml-3">
            <div className="font-semibold">Avril S</div>
            <div className="text-sm opacity-80">Employee</div>
          </div>
        </div>
        
        <nav className="space-y-1">
          <div className="bg-pink-600 rounded px-4 py-3 font-medium">
            LeaderBoard
          </div>
          <div className="px-4 py-3 hover:bg-pink-600 rounded transition-colors duration-200 cursor-pointer">
            My Progress
          </div>
          <div className="px-4 py-3 hover:bg-pink-600 rounded transition-colors duration-200 cursor-pointer">
            Attendance
          </div>
          <div className="px-4 py-3 hover:bg-pink-600 rounded transition-colors duration-200 cursor-pointer">
            Work and Tasks
          </div>
          <div className="px-4 py-3 hover:bg-pink-600 rounded transition-colors duration-200 cursor-pointer">
            Messages
          </div>
        </nav>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <button className="bg-white text-pink-500 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
            Log Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-0 transition-all">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          {/* Toggle Sidebar Button */}
          <button 
            className="text-gray-600 hover:text-pink-500 transition-colors lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-pink-200 rounded-full p-2 w-12 h-12 flex items-center justify-center">
              <span className="font-bold">PP</span>
            </div>
            <span className="ml-2 text-lg font-semibold">Productive Pulse</span>
          </div>

          {/* Time Tracker */}
          <div className="flex items-center space-x-2 bg-gray-200 px-6 py-2 rounded-full">
            <Clock size={18} className="text-gray-600" />
            <span className="text-xl font-bold text-gray-800">
              {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}
            </span>
          </div>

          {/* Break Button */}
          <button 
            className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition shadow-md"
            onClick={() => setBreakModalOpen(true)}
          >
            <span>Break</span>
          </button>
        </div> 

     {/* This Week Section */}
<div className="mb-8 relative max-w-3xl mx-auto">
  <h2 className="text-2xl font-semibold text-pink-500 mb-6 text-center relative inline-block left-1/2 transform -translate-x-1/2">
    <span className="relative z-10">{weekView === "current" ? "This Week" : "Past Week"}</span>
    <span className="absolute bottom-0 left-0 w-full h-2 bg-pink-100 -z-10 rounded-full"></span>
  </h2>

  {/* Week navigation controls */}
  <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-10">
    <button 
      className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg text-pink-500 hover:text-white hover:bg-pink-500 transition-all duration-300 border border-pink-100"
      onClick={toggleWeekView}
      aria-label={weekView === "current" ? "View past week" : "View earlier week"}
    >
      <ChevronLeft size={20} />
    </button>
  </div>

  {/* Only show right arrow if in past week view */}
  {weekView === "past" && (
    <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
      <button 
        className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg text-pink-500 hover:text-white hover:bg-pink-500 transition-all duration-300 border border-pink-100"
        onClick={toggleWeekView}
        aria-label="View current week"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )} 

  <div className="grid grid-cols-7 gap-1 rounded-xl overflow-hidden shadow-lg">
    {(weekView === "current" ? weekData : pastWeekData).map((day, index) => {
      const isWeekend = day.day === "Sat" || day.day === "Sun";
      const isPresent = day.status === "present";
      const isAbsent = day.status === "absent";
      const isToday = new Date().getDate() === day.date; // Assuming day.date is the day number
      
      return (
        <div 
          key={index} 
          className={`p-4 flex flex-col items-center justify-between min-h-24 transition-all duration-200 relative ${
            isWeekend ? 'bg-gray-50' : 'bg-white'
          } ${
            isToday ? 'ring-2 ring-pink-300 z-1' : ''
          }`}
        >
          {/* Status indicator */}
          <div className="absolute top-0 left-0 w-full">
            {isPresent && (
              <div className="bg-gradient-to-r from-green-500 to-teal-500 h-1 w-full"></div>
            )}
            {isAbsent && (
              <div className="bg-gradient-to-r from-red-400 to-orange-400 h-1 w-full"></div>
            )}
          </div>
          
          {/* Day name */}
          <div className={`text-xs font-medium uppercase tracking-wider mt-2 ${
            isWeekend ? 'text-gray-500' : 'text-gray-600'
          }`}>
            {day.day}
          </div>
          
          {/* Date number */}
          <div className={`text-lg font-bold my-1 ${
            isAbsent ? 'text-gray-400' : (isPresent ? 'text-green-600' : 'text-gray-800')
          }`}>
            {day.date}
          </div>
          
          {/* Month */}
          <div className="text-xs text-gray-500">
            March
          </div>
          
          {/* Status badge */}
          <div className="mt-2">
            {isPresent && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Present
              </span>
            )}
            {isAbsent && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Absent
              </span>
            )}
          </div>
        </div>
      );
    })}
  </div>
</div>
        {/* Tab navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          <button 
            className={`px-4 py-2 font-medium ${activeView === 'tasks' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-600 hover:text-pink-500'}`}
            onClick={() => setActiveView('tasks')}
          >
            My Tasks
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeView === 'today' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-600 hover:text-pink-500'}`}
            onClick={() => setActiveView('today')}
          >
            Today
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeView === 'yesterday' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-600 hover:text-pink-500'}`}
            onClick={() => setActiveView('yesterday')}
          >
            Yesterday
          </button>
        </div>


        {/* Content based on active view */}
        {activeView === 'tasks' && (
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-pink-500 mb-4 text-center">My Tasks</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="p-2 text-left text-gray-600 font-medium">No</th>
                      <th className="p-2 text-left text-gray-600 font-medium">Priority</th>
                      <th className="p-2 text-left text-gray-600 font-medium">Task Details</th>
                      <th className="p-2 text-left text-gray-600 font-medium">Start Date</th>
                      <th className="p-2 text-left text-gray-600 font-medium">End Date</th>
                      <th className="p-2 text-center text-gray-600 font-medium">Done</th>
                      <th className="p-2 text-center text-gray-600 font-medium">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((task, index) => (
                      <tr key={task.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-2">{index + 1}</td>
                        <td className="p-2">
                          <button onClick={() => openPriorityModal(task)}>
                            <div className={`w-4 h-4 rounded-full ${priorityColors[task.priority]}`}></div>
                          </button>
                        </td>
                        <td className="p-2">{task.name}</td>
                        <td className="p-2">
                          {formatDate(task.startDate)}
                        </td>
                        <td className="p-2">
                          {task.name === "Ongoing" ? "Ongoing" : formatDate(task.endDate)}
                        </td>
                        <td className="p-2 text-center">
                          <button onClick={() => toggleTaskCompletion(task.id)} className="text-gray-500 hover:text-green-500">
                            {task.completed ? 
                              <CheckSquare size={18} className="text-green-500" /> : 
                              <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                            }
                          </button>
                        </td>
                        <td className="p-2 text-center">
                          <button onClick={() => deleteTask(task.id)} className="text-gray-500 hover:text-red-500">
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-end mt-4">
                <button 
                  className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition shadow-sm"
                  onClick={() => {
                    document.getElementById("newTaskInput").focus();
                  }}
                >
                  New Task
                </button>
              </div>
              
              <div className="mt-4 flex">
                <input 
                  id="newTaskInput"
                  type="text" 
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter new task" 
                  className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                  onKeyDown={(e) => e.key === 'Enter' && addNewTask()}
                />
                <button 
                  onClick={addNewTask}
                  className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600 transition"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        )}

        {activeView === 'today' && (
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-pink-500 mb-4 text-center">Today</h2>
            <PieChartComponent data={todayStats} title="Today's Activity" />
          </div>
        )}

        {activeView === 'yesterday' && (
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-pink-500 mb-4 text-center">Yesterday</h2>
            <PieChartComponent data={yesterdayStats} title="Yesterday's Activity" />
          </div>
        )}

        <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-pink-500 text-white rounded-full p-3 shadow-lg hover:bg-pink-600 transition">
            <span role="img" aria-label="Chatbot">🤖</span>
        </button> 
        </div>
        {/* Break Modal */}
        {breakModalOpen && ( 
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <h2 className="text-xl mb-4 text-gray-800 font-semibold">Select Break Type</h2>
              <div className="space-y-2">
                {["Lunch", "Coffee", "Short Walk", "Personal"].map((breakType) => (
                  <label key={breakType} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded transition cursor-pointer">
                    <input
                      type="radio"
                      name="break"
                      value={breakType}
                      checked={selectedBreak === breakType}
                      onChange={() => setSelectedBreak(breakType)}
                      className="form-radio text-pink-500"
                    /> 
                    <span className="text-gray-700">{breakType}</span>
                  </label>
                ))}
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button 
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                  onClick={() => setBreakModalOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
                  onClick={() => { 
                    // Logic to handle break selection
                    setBreakModalOpen(false);
                  }}
                >
                  Confirm 
                </button>
              </div>
            </div> 
          </div>
        )}
      
        {/* Priority Modal */}
        {priorityModalOpen && selectedTask && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <h2 className="text-xl mb-4 text-gray-800 font-semibold">Change Task Priority</h2>
              <div className="flex flex-col space-y-2">
                {[
                  { key: "primary", label: "High Priority" },
                  { key: "secondary", label: "Medium Priority" },
                  { key: "least", label: "Low Priority" }
                ].map((priority) => (
                  <button 
                    key={priority.key} 
                    className={`px-4 py-2 rounded ${priorityColors[priority.key]} text-white flex items-center`}
                    onClick={() => changePriority(priority.key)}
                  >
                    <div className="w-3 h-3 rounded-full bg-white mr-2"></div>
                    {priority.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                  onClick={() => setPriorityModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductivityPulseApp;