import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL || "https://localhost:5000/api/auth";

export const login = async (email, password) => {
    return axios.post(`${API_URL}/employee/login`, { email, password });
};

export const signup = async (userData) => {
    return axios.post(`${API_URL}/employee/signup`, userData);
};

export const adminLogin = async (email, password) => {
    return axios.post(`${API_URL}/admin/login`, { email, password });
};

export const adminSignup = async (userData) => {
    return axios.post(`${API_URL}/admin/signup`, userData);
};

export const forgotPassword = async (email) => {
    return axios.post(`${API_URL}/forgot-password`, email);
};

export const resetPassword = async (resetToken, newPassword) => {
    return axios.post(`${API_URL}/reset-password`, { resetToken, newPassword });
};


export const logout = () => {
    localStorage.removeItem("token");
};

export const getCurrentUser = () =>{
    return localStorage.getItem("token");
};


