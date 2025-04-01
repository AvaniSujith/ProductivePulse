// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const refreshAuth = async () => {
//             try {
//                 const res = await axios.get("/api/auth/refresh", { withCredentials: true });
//                 setUser(res.data.user);
//             } catch (error) {
//                 setUser(null);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         refreshAuth();
//     }, []);

//     const login = async (credentials) => {
//         try {
//             const res = await axios.post("/api/login", credentials, { withCredentials: true });
//             setUser(res.data.user);
//             return res.data;
//         } catch (error) {
//             throw error.response?.data || error;
//         }
//     };

//     const signup = async (credentials) => {
//         try {
//             const res = await axios.post("/api/signup", credentials, { withCredentials: true });
//             setUser(res.data.user);
//             return res.data;
//         } catch (error) {
//             throw error.response?.data || error;
//         }
//     };

//     const logout = async () => {
//         await axios.post("/api/logout", {}, { withCredentials: true });
//         setUser(null);
//     }; 

//     return (
//         <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };


// export default AuthProvider;




import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Set the base URL for your API
// Change this to where your backend is actually running
const API_BASE_URL = "http://localhost:5000"; // Assuming your backend is on port 5000

// Create axios instance with the base URL
const api = axios.create({
  baseURL: API_BASE_URL
});

// Create context with default values
const AuthContext = createContext({
  user: null,
  loading: true,
  login: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  logout: () => {}
});

// Export the context for use with useContext
export default AuthContext;

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Basic authentication check on mount
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      // Add token to headers for all requests
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      // Just set a basic user object for now
      setUser({ role: "employee" }); // You might want to decode the token instead
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      const response = await api.post("/api/login", credentials);
      
      // Store token
      localStorage.setItem("accessToken", response.data.accessToken);
      
      // Set authorization header for future requests
      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`;
      
      // Set user
      const userData = { role: response.data.role };
      setUser(userData);
      
      return { user: userData };
    } catch (error) {
      console.error("Login error:", error);
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  // Signup function
  const signup = async (userData) => {
    try {
      const response = await api.post("/api/signup", userData);
      
      // Store token
      localStorage.setItem("accessToken", response.data.token);
      
      // Set authorization header for future requests
      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      
      // Set user
      const user = { role: userData.role };
      setUser(user);
      
      return { user };
    } catch (error) {
      console.error("Signup error:", error);
      throw new Error(error.response?.data?.message || "Signup failed");
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("accessToken");
    delete api.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
  
}; 