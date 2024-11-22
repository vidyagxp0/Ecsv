import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "Amit@vidyagxp.com" && password === "1") {
      setError(""); 
      navigate("/dashboard");
    } else {
      setError("Invalid email or password. Please try again."); 
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{ backgroundImage: "linear-gradient(to top, #09203f 0%, #537895 100%)" }}
    >
      <div
        className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg
        max-w-md w-full"
      >
        <img src="./vidyaGxp_logo.png" alt="" />
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="block mb-2 text-sm
            font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900
            sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <label
            htmlFor="password"
            className="block mb-2 text-sm
            font-medium text-gray-900 mt-4"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900
            sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/create-account")}
            type="button"
            className="w-full mt-6 px-4 py-2 text-blue-500 bg-white border border-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Create Account
          </button>
          <p
            className="text-sm text-gray-600 mt-4 cursor-pointer"
            onClick={() => navigate("/forgotpassword")}
          >
            Forgot password?
          </p>
        </form>
      </div>
    </div>
  );
}
