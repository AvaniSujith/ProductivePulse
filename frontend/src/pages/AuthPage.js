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

// import { useContext, useState } from "react"; 
// import AuthContext from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Auth = () => {
//     const navigate = useNavigate();
//     const [isSignUp, setIsSignUp] = useState(false); 
//     const [credentials, setCredentials] = useState({
//         username: "",
//         email: "",
//         password: "",
//         role: "employee"
//     });

//     const [ error, setError ] = useState(null);
//     const { login, signup } = useContext(AuthContext);

//     const handleChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         setError(null);
//         try{
//             let userData;
//             if(isSignUp){
//                 userData = await signup(credentials);
//             }else{
//                 userData = await login({ email: credentials.email, password:credentials.password});
//             }

//             // if(userData.role === "admin"){
//             //     navigate("/admin-dashboard")
//             // }else{
//             //     navigate("/greeting");
//             // }

//             if(userData?.user?.role === "admin"){
//                 navigate("/admin");
//             }else{
//                 navigate("/greeting");
//             }
            
//         }catch(err){
//             setError(err.message || "Something went wrong");
//         }
//     };


//     return ( 
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="relative w-[750px] h-[500px] bg-white shadow-2xl rounded-lg overflow-hidden">
                
//                 {/* Main Form Container */}
//                 <div className={`absolute top-0 left-0 w-full h-full flex transition-all duration-700 ease-in-out ${isSignUp ? "-translate-x-1/2" : "translate-x-0"}`}>
                    
//                     {/* SIGN IN FORM */}
//                     <div className="w-1/2 bg-white p-8 flex flex-col items-center justify-center">
//                         <h2 className="text-3xl font-bold text-gray-700">Sign In</h2>
//                         {error && <p className="text-red-500 text-sm">{error}</p>}
//                         {/* <div className="flex gap-4 my-4">
//                             <button className="w-10 h-10 bg-gray-200 rounded-full">F</button>
//                             <button className="w-10 h-10 bg-gray-200 rounded-full">G+</button>
//                             <button className="w-10 h-10 bg-gray-200 rounded-full">in</button>
//                         </div>
//                         <p className="text-gray-500 text-sm">or use your account</p> */}
//                         <input name="email" type="email" placeholder="Email" className="w-full p-2 mt-3 border border-gray-300 rounded" onChange={handleChange}/>
//                         <input name="password" type="password" placeholder="Password" className="w-full p-2 mt-3 border border-gray-300 rounded" onChange={handleChange}/>
//                         <p className="text-sm text-gray-500 mt-2 cursor-pointer">Forgot your password?</p>
//                         <button className="w-full bg-red-500 text-white p-2 rounded mt-4" onClick={handleSubmit}>Sign In</button>
//                     </div>

//                     {/* SIGN UP FORM */}
//                     <div className="w-1/2 bg-white p-8 flex flex-col items-center justify-center">
//                         <h2 className="text-3xl font-bold text-gray-700">Sign Up</h2>
//                         {error && <p className="text-red-500 text-sm">{error}</p>}
//                         {/* <div className="flex gap-4 my-4">
//                             <button className="w-10 h-10 bg-gray-200 rounded-full">F</button>
//                             <button className="w-10 h-10 bg-gray-200 rounded-full">G+</button>
//                             <button className="w-10 h-10 bg-gray-200 rounded-full">in</button>
//                         </div>
//                         <p className="text-gray-500 text-sm">or use your email for registration</p> */}
//                         <input name="username" type="text" placeholder="Username" className="w-full p-2 mt-3 border border-gray-300 rounded" onChange={handleChange}/>
//                         <input name="email" type="email" placeholder="Email" className="w-full p-2 mt-3 border border-gray-300 rounded" onChange={handleChange}/>
//                         <input name="password" type="password" placeholder="Password" className="w-full p-2 mt-3 border border-gray-300 rounded" onChange={handleChange}/>
//                         <button className="w-full bg-red-500 text-white p-2 rounded mt-4" onClick={handleSubmit}>Sign Up</button>
//                     </div>
//                 </div>

//                 {/* Sliding Panel (Now Fixed) */}
//                 <div className={`absolute top-0 w-1/2 h-full bg-red-500 text-white flex flex-col items-center justify-center transition-all duration-700 ease-in-out z-10 ${isSignUp ? "left-1/2" : "left-0"}`}>
//                     <h2 className="text-3xl font-bold">{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h2>
//                     <p className="text-sm text-white mt-2 text-center">
//                         {isSignUp ? "To keep connected with us, login with your credentials" : "Enter your details and start your journey with us"}
//                     </p>
//                     <button className="border-2 border-white px-6 py-2 mt-4 rounded-full" onClick={() => setIsSignUp(!isSignUp)}>
//                         {isSignUp ? "Sign In" : "Sign Up"}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Auth; 



import { useContext, useState } from "react"; 
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate();
    const [isSignUpView, setIsSignUpView] = useState(false); 
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        role: "employee"
    });

    const [error, setError] = useState(null);
    const { login, signup } = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        setError(null);
        try {

            // console.log("Starting login with: ", credentials);

            const userData = await login({ 
                email: credentials.email, 
                password: credentials.password
            });

            // // console.log("Recieved userData after Login: ", userData);
            // // console.log("User role: ", userData?.user?.role);
            
            if(userData?.user?.role === "admin") {

                // console.log("Should navigate to /admin");

                navigate("/admin");

                // console.log("Navigation attempt completed");

            } else {

                // console.log("Should navigate to /greeting");

                navigate("/greeting");

                // console.log("Navigation attempt completed");
            }

            // setTimeout(() => {
            //     if(userData?.user?.role === "admin"){
            //         navigate("/admin")
            //     }else{
            //         navigate("/greeting");
            //     }
            // }, 100)


            // if(userData?.user?.role === "admin"){
            //     window.location.href = "/admin";
            // }else{
            //     window.location.href = "/greeting"
            // }

        } catch(err) {
            console.error("Login error in component", error)
            setError(err.message || "Sign in failed");
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const userData = await signup(credentials);
            
            if(userData?.user?.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/greeting");
            }
        } catch(err) {
            setError(err.message || "Sign up failed");
        }
    };

    return ( 
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative w-[750px] h-[500px] bg-white shadow-2xl rounded-lg overflow-hidden">
                
                {/* Sign In Form - only visible when isSignUpView is false */}
                <div className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-700 ease-in-out ${isSignUpView ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <div className="w-full h-full bg-white p-8 flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold text-gray-700">Sign In</h2>
                        {error && !isSignUpView && <p className="text-red-500 text-sm">{error}</p>}
                        <input 
                            name="email" 
                            type="email" 
                            placeholder="Email" 
                            className="w-full p-2 mt-3 border border-gray-300 rounded" 
                            onChange={handleChange}
                            value={credentials.email}
                        />
                        <input 
                            name="password" 
                            type="password" 
                            placeholder="Password" 
                            className="w-full p-2 mt-3 border border-gray-300 rounded" 
                            onChange={handleChange}
                            value={credentials.password}
                        />
                        <p className="text-sm text-gray-500 mt-2 cursor-pointer">Forgot your password?</p>
                        <button 
                            className="w-full bg-red-500 text-white p-2 rounded mt-4" 
                            onClick={handleSignIn}
                        >
                            Sign In
                        </button>
                    </div>
                </div>

                {/* Sign Up Form - only visible when isSignUpView is true */}
                <div className={`absolute top-0 right-0 w-1/2 h-full transition-all duration-700 ease-in-out ${isSignUpView ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="w-full h-full bg-white p-8 flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold text-gray-700">Sign Up</h2>
                        {error && isSignUpView && <p className="text-red-500 text-sm">{error}</p>}
                        <input 
                            name="username" 
                            type="text" 
                            placeholder="Username" 
                            className="w-full p-2 mt-3 border border-gray-300 rounded" 
                            onChange={handleChange}
                            value={credentials.username}
                        />
                        <input 
                            name="email" 
                            type="email" 
                            placeholder="Email" 
                            className="w-full p-2 mt-3 border border-gray-300 rounded" 
                            onChange={handleChange}
                            value={credentials.email}
                        />
                        <input 
                            name="password" 
                            type="password" 
                            placeholder="Password" 
                            className="w-full p-2 mt-3 border border-gray-300 rounded" 
                            onChange={handleChange}
                            value={credentials.password}
                        />
                        <button 
                            className="w-full bg-red-500 text-white p-2 rounded mt-4" 
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Sliding Panel */}
                <div className={`absolute top-0 w-1/2 h-full bg-red-500 text-white flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isSignUpView ? "left-0" : "left-1/2"}`}>
                    <h2 className="text-3xl font-bold">{isSignUpView ? "Welcome Back!" : "Hello, Friend!"}</h2>
                    <p className="text-sm text-white mt-2 text-center mx-4">
                        {isSignUpView ? "To keep connected with us, login with your credentials" : "Enter your details and start your journey with us"}
                    </p>
                    <button 
                        className="border-2 border-white px-6 py-2 mt-4 rounded-full" 
                        onClick={() => {
                            setIsSignUpView(!isSignUpView);
                            setError(null);
                        }}
                    >
                        {isSignUpView ? "Sign In" : "Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth;