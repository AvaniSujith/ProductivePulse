import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      alert(data.message);  // Show success or error message
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 text-center">Forgot Password</h2>
        <input 
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 my-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleForgotPassword} className="w-full bg-blue-500 text-white p-2 rounded mt-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
