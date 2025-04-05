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
// import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { jwtDecode } from "jwt-decode"; // Uncomment if decoding the token

// Set the base URL for your API
const API_BASE_URL = "http://localhost:5000"; 

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
    let storedUser = localStorage.getItem("user");
  
    // Ensure storedUser is valid before parsing
    if (token && storedUser && storedUser !== "undefined") {
      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        localStorage.removeItem("user");
        setUser(null);
      }
    } else {
      setUser(null);
    }
  
    setLoading(false);
  }, []);
  
  // Login function 
  const login = async (email, password) => {

    console.log("attempting", email, password)
    // try {
    //   const response = await api.post("/api/login", credentials);
    //   const { token, user } = response.data; 

    //   // Store token and user data
    //   localStorage.setItem("accessToken", token);
    //   localStorage.setItem("user", JSON.stringify(user));

    //   // Set authorization header for future requests
    //   api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    //   setUser(user);
    //   return user;

    // } catch (error) {
    //   console.error("Login error:", error);
    //   throw new Error(error.response?.data?.message || "Login failed");
    // }

    // const navigate = useNavigate();
    const response = await api.post('/api/login', { email,password }, { withCredentials: true });
    // console.log("Login :", response.data)
    const { accessToken, role } = response.data;
    const returnedUser = { role: role.toLowerCase(), email };

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('user', JSON.stringify(returnedUser));
    localStorage.setItem("userRole", role);

    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    setUser(returnedUser);
    return returnedUser;
  };

  // Signup function
  const signup = async (credentials) => {
    console.log("Sign in",
      credentials
    )
    try {
      const response = await api.post("/api/signup", credentials);
      const { token, user: returnedUser } = response.data;

      // Store token and user data
      localStorage.setItem("accessToken", token);
      localStorage.setItem("user", JSON.stringify(returnedUser));
      localStorage.setItem("userRole", returnedUser.role.toLowerCase());

      // Set authorization header for future requests
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser(returnedUser); 

      return returnedUser; 

    } catch (error) {

    
      console.error("Signup error:", error);
      throw new Error(error.response?.data?.message || "Signup failed"); 

    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("userRole");
    delete api.defaults.headers.common["Authorization"];
    setUser(null);

    // delete api.defaults.headers.common["Authorization"];
    // setUser(null);

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
 