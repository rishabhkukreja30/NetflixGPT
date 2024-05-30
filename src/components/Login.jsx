import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButonClick = (e) => {
    e.preventDefault();
    const res = isSignInForm
      ? checkValidData(email.current.value, password.current.value)
      : checkValidData(
          email.current.value,
          password.current.value,
          fullName.current.value
        );
    setErrorMessage(res);
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
            ref={fullName}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 mx-2 my-4 w-full bg-gray-700 bg-opacity-70 rounded-sm"
          ref={email}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 mx-2 my-4 w-full bg-gray-700 bg-opacity-70 rounded-sm"
          ref={password}
        />
        <p className="text-red-700 font-medium text-xl p-4">{errorMessage}</p>
        <button
          className="p-4 my-4 mx-2 w-full bg-red-700 font-semibold text-xl rounded-sm"
          onClick={(e) => handleButonClick(e)}
        >
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
