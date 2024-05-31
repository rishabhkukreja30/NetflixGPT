import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-30  px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between">
      <img className="w-60" src={NETFLIX_LOGO} alt="netflix logo" />
      {user && (
        <div className="flex ">
          <img
            src={USER_ICON}
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
