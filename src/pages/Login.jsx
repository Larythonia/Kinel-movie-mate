import { useState } from "react";
import Button from "../component/Button";

// This is a placeholder Login component. You can expand it with actual form fields and logic.

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  const isAdmin = true; // Change to true to test admin view

  const handleSubmit = () => {
 
    // Handle login logic here
    firstName === user.name && email === user.email
  }

const user = {
  name: "TiGirl",
  email: "tigirl@example.com"
}

const userEmail = user?.email ?? "No email provided"; // Optional chaining and nullish coalescing example

const isLoading = false
const error = false // Example of conditional rendering based on loading state

if (isLoading === true) {
 
  return (
    <p>Loading...</p>
  )
}
 

if (error === true) {

  return (
    <p>Error loading data. Please try again.</p>
  )
}
   const isUser = true

const userStatus = isUser ? "User" : 
"Guest"; // Ternary operator example

const isLoggedIn = true; // Example of conditional rendering based on login state

  return (
    <div className="w-h-screen bg-gray-100 flex items-center justify-center">
  <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md m-20" >
    
    {/* Header */}
    <h1 className="text-3xl font-bold text-gray-500 mb-2">Welcome back 👋</h1>
    <p className="text-gray-500 text-sm mb-8">Login to your account</p>

    {/* Admin badge */}
    {isAdmin ? (
      <div className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-lg mb-6">
        🛡️ Logged in as Admin
      </div>
    ) : (
      <div className="bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-lg mb-6">
        👤 Logged in as User
      </div>
    )}

    {/* Error message */}
    {error && (
      <div className="bg-red-100 text-red-600 text-sm px-4 py-2 rounded-lg mb-6">
        ⚠️ Something went wrong. Please try again.
      </div>
    )}

    <form className="flex flex-col gap-5">
      
      {/* First Name */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition mt-2"
      >
        Submit
      </button>

    </form>

    {/* Footer */}
    <p className="text-center text-sm text-gray-400 mt-6">
      Don't have an account?{" "}
      <span className="text-blue-500 hover:underline cursor-pointer">Sign up</span>
    </p>

  </div>
</div>
  );
}
export default Login;