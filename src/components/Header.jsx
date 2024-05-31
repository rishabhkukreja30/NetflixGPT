import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute z-30  px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between">
      <img
        className="w-60"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix logo"
      />
      {user && (
        <div className="flex ">
          <img
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="user-icon"
            className="w-16 h-16 m-5 rounded-lg"
          />
          <button
            onClick={handleSignOut}
            className="bg-gray-700 text-white my-5 mx-2 py-3 px-5 text-lg rounded-lg hover:bg-gray-900"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
