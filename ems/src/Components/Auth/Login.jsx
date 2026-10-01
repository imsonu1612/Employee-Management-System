import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is:", email);
    console.log("password is:", password);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex flex-col bg-amber-400 h-screen w-screen items-center justify-center gap-4">
      <div>
        <h1 className="text-black font-bold">Please Enter your Details here</h1>
      </div>
      <div className="border-2 bg-blue-300 items-center border-red-500 rounded-2xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center gap-5 m-10"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="Enter your email id"
            className="border-2 px-3 py-2 outline-none font-semibold rounded-2xl  placeholder:text-gray-500  "
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="Enter password"
            className="border-2 px-3 py-2 outline-none font-semibold rounded-2xl placeholder:text-gray-500  "
          />
          <button className="bg-black text-white cursor-pointer active:scale-90 rounded-2xl px-5 py-2">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
