import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import {
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
  USER_ICON,
} from "../utils/constants";
import { toggleGptSearchView } from "../store/gptSlice";
import { changeLanguage } from "../store/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

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

  const handleGPTSearchClick = () => {
    // toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute z-30  px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between">
      <img className="w-60" src={NETFLIX_LOGO} alt="netflix logo" />
      {user && (
        <div className="flex ">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="bg-gray-700 text-white my-5 mx-2 py-3 px-5 text-lg rounded-lg hover:bg-gray-900 "
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTSearchClick}
            className="bg-gray-700 text-white my-5 mx-2 py-3 px-5 text-lg rounded-lg hover:bg-gray-900"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
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
