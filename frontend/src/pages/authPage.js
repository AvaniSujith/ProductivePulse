import { useState } from "react";

const Auth = () => {
    const [ isSignUp, setIsSignUp ] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative w-96 bg-white p-8 rounded-lg shadow-lg overflow-hidden">
                <div className={`absolute inset-0 bg-blue-500 transition-transform duration-500 transform ${isSignUp ? "translate-x-0" : "-translate-x-full"}`}>
                </div>
                <div className="relative z-10">
                    {isSignUp ? (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-700 text-center">Sign Up</h2>
                            <input 
                                type="text"
                                placeholder="Username"
                                className="w-full p-2 my-2 border rounded"
                            />
                            <input 
                                type="email"
                                placeholder="Email"
                                className="w-full p-2 my-2 border rounded"
                            />
                            <input 
                                type="password"
                                placeholder="Password"
                                className="w-full p-2 my-2 border rounded"
                            />
                            <button className="w-full bg-blue-500 text-white p-2 rounded mt-2">
                                Sign Up
                            </button>
                            <p
                                className="text-sm text-gray-500 text-center mt-4 cursor-pointer"
                                onClick={() => setIsSignUp(false)}
                            >
                                Already have an account? Login
                            </p>
                            </div>
                    ):(
                        <div>
                            <h2 className="text-2xl font-bold text-gray-700 text-center">Login</h2>
                            <input 
                                type="email"
                                placeholder="Email" 
                                className="w-full p-2 my-2 border rounded" 
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                className="w-full p-2 my-2 border rounded" 
                            />
                            <button className="w-full bg-blue-500 text-white p-2 rounded mt-2">
                                Login
                            </button>
                            <p
                                className="text-sm text-gray-500 text-center mt-4 cursor-pointer"
                                onClick={() => setIsSignUp(true)}
                            >
                                Don't have an account? Sign Up
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Auth;