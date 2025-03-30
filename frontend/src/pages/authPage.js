// import { useState } from "react";

// const Auth = () => {
//     const [ isSignUp, setIsSignUp ] = useState(false);

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="relative w-96 bg-white p-8 rounded-lg shadow-lg overflow-hidden">
//                 <div className={`absolute inset-0 bg-blue-500 transition-transform duration-500 transform ${isSignUp ? "translate-x-0" : "-translate-x-full"}`}>
//                 </div>
//                 <div className="relative z-10">
//                     {isSignUp ? (
//                         <div>
//                             <h2 className="text-2xl font-bold text-gray-700 text-center">Sign Up</h2>
//                             <input 
//                                 type="text"
//                                 placeholder="Username"
//                                 className="w-full p-2 my-2 border rounded"
//                             />
//                             <input 
//                                 type="email"
//                                 placeholder="Email"
//                                 className="w-full p-2 my-2 border rounded"
//                             />
//                             <input 
//                                 type="password"
//                                 placeholder="Password"
//                                 className="w-full p-2 my-2 border rounded"
//                             />
//                             <button className="w-full bg-blue-500 text-white p-2 rounded mt-2">
//                                 Sign Up
//                             </button>
//                             <p
//                                 className="text-sm text-gray-500 text-center mt-4 cursor-pointer"
//                                 onClick={() => setIsSignUp(false)}
//                             >
//                                 Already have an account? Login
//                             </p>
//                             </div>
//                     ):(
//                         <div>
//                             <h2 className="text-2xl font-bold text-gray-700 text-center">Login</h2>
//                             <input 
//                                 type="email"
//                                 placeholder="Email" 
//                                 className="w-full p-2 my-2 border rounded" 
//                             />
//                             <input 
//                                 type="password" 
//                                 placeholder="Password" 
//                                 className="w-full p-2 my-2 border rounded" 
//                             />
//                             <button className="w-full bg-blue-500 text-white p-2 rounded mt-2">
//                                 Login
//                             </button>
//                             <p
//                                 className="text-sm text-gray-500 text-center mt-4 cursor-pointer"
//                                 onClick={() => setIsSignUp(true)}
//                             >
//                                 Don't have an account? Sign Up
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Auth;

// import { useState } from "react";
// import axios from "axios";

// const Auth = () => {
//     const [isSignUp, setIsSignUp] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [username, setUsername] = useState("");
//     const [error, setError] = useState(null);
//     const [message, setMessage] = useState("");
//     const [forgotPassword, setForgotPassword] = useState(false);

//     const handleAuth = async () => {
//         try {
//             const endpoint = isSignUp ? "/api/auth/signup" : "/api/auth/login";
//             const payload = isSignUp ? { username, email, password } : { email, password };
            
//             const { data } = await axios.post(endpoint, payload);
//             localStorage.setItem("token", data.token);
//             setMessage("Authentication successful!");
//             setError(null);
//         } catch (err) {
//             setError(err.response?.data?.message || "An error occurred");
//         }
//     };

//     const handleForgotPassword = async () => {
//         try {
//             const { data } = await axios.post("/api/auth/forgot-password", { email });
//             setMessage(data.message);
//             setError(null);
//         } catch (err) {
//             setError(err.response?.data?.message || "Failed to send reset link");
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="relative w-96 bg-white p-8 rounded-lg shadow-lg overflow-hidden">
//                 <div className="relative z-10">
//                     {forgotPassword ? (
//                         <div>
//                             <h2 className="text-2xl font-bold text-gray-700 text-center">Forgot Password</h2>
//                             <input 
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="w-full p-2 my-2 border rounded"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <button onClick={handleForgotPassword} className="w-full bg-blue-500 text-white p-2 rounded mt-2">
//                                 Send Reset Link
//                             </button>
//                             <p className="text-sm text-gray-500 text-center mt-4 cursor-pointer" onClick={() => setForgotPassword(false)}>
//                                 Back to Login
//                             </p>
//                         </div>
//                     ) : isSignUp ? (
//                         <div>
//                             <h2 className="text-2xl font-bold text-gray-700 text-center">Sign Up</h2>
//                             <input 
//                                 type="text"
//                                 placeholder="Username"
//                                 className="w-full p-2 my-2 border rounded"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                             />
//                             <input 
//                                 type="email"
//                                 placeholder="Email"
//                                 className="w-full p-2 my-2 border rounded"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <input 
//                                 type="password"
//                                 placeholder="Password"
//                                 className="w-full p-2 my-2 border rounded"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             <button onClick={handleAuth} className="w-full bg-blue-500 text-white p-2 rounded mt-2">
//                                 Sign Up
//                             </button>
//                             <p className="text-sm text-gray-500 text-center mt-4 cursor-pointer" onClick={() => setIsSignUp(false)}>
//                                 Already have an account? Login
//                             </p>
//                         </div>
//                     ) : (
//                         <div>
//                             <h2 className="text-2xl font-bold text-gray-700 text-center">Login</h2>
//                             <input 
//                                 type="email"
//                                 placeholder="Email"
//                                 className="w-full p-2 my-2 border rounded"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <input 
//                                 type="password"
//                                 placeholder="Password"
//                                 className="w-full p-2 my-2 border rounded"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             <button onClick={handleAuth} className="w-full bg-blue-500 text-white p-2 rounded mt-2">
//                                 Login
//                             </button>
//                             <p className="text-sm text-gray-500 text-center mt-4 cursor-pointer" onClick={() => setIsSignUp(true)}>
//                                 Don't have an account? Sign Up
//                             </p>
//                             <p className="text-sm text-gray-500 text-center mt-2 cursor-pointer" onClick={() => setForgotPassword(true)}>
//                                 Forgot Password?
//                             </p>
//                         </div>
//                     )}
//                     {error && <p className="text-red-500 text-center mt-2">{error}</p>}
//                     {message && <p className="text-green-500 text-center mt-2">{message}</p>}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Auth;


// import { useState } from "react";

// const Auth = () => {
//     const [isSignUp, setIsSignUp] = useState(false);

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
//             <div className="relative w-96 h-[500px] bg-white rounded-lg shadow-xl overflow-hidden">
//                 {/* Sliding Panel */}
//                 <div className={`absolute top-0 left-0 w-full h-full bg-blue-500 transition-transform duration-500 ${isSignUp ? "translate-x-0" : "-translate-x-full"}`}></div>

//                 <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
//                     {isSignUp ? (
//                         <div className="w-full">
//                             <h2 className="text-2xl font-bold text-gray-700 text-center">Sign Up</h2>
//                             <input type="text" placeholder="Username" className="w-full p-2 my-2 border rounded" />
//                             <input type="email" placeholder="Email" className="w-full p-2 my-2 border rounded" />
//                             <input type="password" placeholder="Password" className="w-full p-2 my-2 border rounded" />
//                             <button className="w-full bg-blue-500 text-white p-2 rounded mt-2">Sign Up</button>
//                             <p className="text-sm text-gray-500 text-center mt-4 cursor-pointer" onClick={() => setIsSignUp(false)}>Already have an account? Login</p>
//                         </div>
//                     ) : (
//                         <div className="w-full">
//                             <h2 className="text-2xl font-bold text-gray-700 text-center">Login</h2>
//                             <input type="email" placeholder="Email" className="w-full p-2 my-2 border rounded" />
//                             <input type="password" placeholder="Password" className="w-full p-2 my-2 border rounded" />
//                             <button className="w-full bg-blue-500 text-white p-2 rounded mt-2">Login</button>
//                             <p className="text-sm text-gray-500 text-center mt-4 cursor-pointer" onClick={() => setIsSignUp(true)}>Don't have an account? Sign Up</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Auth;


import { useState } from "react"; 

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false); 

    return ( 
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative w-[750px] h-[500px] bg-white shadow-2xl rounded-lg overflow-hidden">
                
                {/* Main Form Container */}
                <div className={`absolute top-0 left-0 w-full h-full flex transition-all duration-700 ease-in-out ${isSignUp ? "-translate-x-1/2" : "translate-x-0"}`}>
                    
                    {/* SIGN IN FORM */}
                    <div className="w-1/2 bg-white p-8 flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold text-gray-700">Sign In</h2>
                        {/* <div className="flex gap-4 my-4">
                            <button className="w-10 h-10 bg-gray-200 rounded-full">F</button>
                            <button className="w-10 h-10 bg-gray-200 rounded-full">G+</button>
                            <button className="w-10 h-10 bg-gray-200 rounded-full">in</button>
                        </div>
                        <p className="text-gray-500 text-sm">or use your account</p> */}
                        <input type="email" placeholder="Email" className="w-full p-2 mt-3 border border-gray-300 rounded" />
                        <input type="password" placeholder="Password" className="w-full p-2 mt-3 border border-gray-300 rounded" />
                        <p className="text-sm text-gray-500 mt-2 cursor-pointer">Forgot your password?</p>
                        <button className="w-full bg-red-500 text-white p-2 rounded mt-4">Sign In</button>
                    </div>

                    {/* SIGN UP FORM */}
                    <div className="w-1/2 bg-white p-8 flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold text-gray-700">Sign Up</h2>
                        {/* <div className="flex gap-4 my-4">
                            <button className="w-10 h-10 bg-gray-200 rounded-full">F</button>
                            <button className="w-10 h-10 bg-gray-200 rounded-full">G+</button>
                            <button className="w-10 h-10 bg-gray-200 rounded-full">in</button>
                        </div>
                        <p className="text-gray-500 text-sm">or use your email for registration</p> */}
                        <input type="text" placeholder="Username" className="w-full p-2 mt-3 border border-gray-300 rounded" />
                        <input type="email" placeholder="Email" className="w-full p-2 mt-3 border border-gray-300 rounded" />
                        <input type="password" placeholder="Password" className="w-full p-2 mt-3 border border-gray-300 rounded" />
                        <button className="w-full bg-red-500 text-white p-2 rounded mt-4">Sign Up</button>
                    </div>
                </div>

                {/* Sliding Panel (Now Fixed) */}
                <div className={`absolute top-0 w-1/2 h-full bg-red-500 text-white flex flex-col items-center justify-center transition-all duration-700 ease-in-out z-10 ${isSignUp ? "left-1/2" : "left-0"}`}>
                    <h2 className="text-3xl font-bold">{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h2>
                    <p className="text-sm text-white mt-2 text-center">
                        {isSignUp ? "To keep connected with us, login with your credentials" : "Enter your details and start your journey with us"}
                    </p>
                    <button className="border-2 border-white px-6 py-2 mt-4 rounded-full" onClick={() => setIsSignUp(!isSignUp)}>
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth; 