import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix background image"
        />
      </div>

      <form className="w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-sm">
        <h1 className="text-3xl font-bold p-4 my-2 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 mx-2 my-4 w-full bg-gray-700 bg-opacity-70 rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 mx-2 my-4 w-full bg-gray-700 bg-opacity-70 rounded-sm"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 mx-2 my-4 w-full bg-gray-700 bg-opacity-70 rounded-sm"
        />
        <button className="p-4 my-4 mx-2 w-full bg-red-700 font-semibold text-xl rounded-sm">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-medium py-4 mx-2 cursor-pointer hover:text-gray-400"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already Registered? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
