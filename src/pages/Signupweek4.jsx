import { useState } from "react";

function Signupweek4() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const  { name, value } = e.target;

    if (name === "username") setUsername(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  }

 const [error, setError] = useState("false");

  const noEmail = error === "true" ? "Email is required" : "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
     setError("true");
    } else {
      setError("false");
    }
  };

  return (
    <div className="flex justify-center items-center bg-red-100 min-h-screen">
      <div className="bg-white p-10 my-10 w-full max-w-sm rounded-lg shadow-lg">
        {/*Haeder */}
        <h2 className="font-bold text-red-500 pb-5">Welcome Back</h2>

        <div>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-1 mb-4 ">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="enter username"
                className="border-red-200 border-2 rounded p-2 w-full"
              />
            </div>

            <div className="flex flex-col gap-1 mb-4 ">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="enter @email "
                className="border-red-200 border-2 rounded p-2 w-full"
              />
              {error === "true" && (
                <p className="text-red-500 text-sm">{noEmail}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 mb-4 ">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="**********"
                className="border-red-200 border-2 rounded p-2 w-full"
              />
            </div>

            <button
              className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signupweek4;
