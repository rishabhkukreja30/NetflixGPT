export const checkValidData = (email, password, fullName = "") => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  let isFullNameValid = true;
  if (fullName.length !== 0) {
    isFullNameValid = fullName.length >= 5;
    if (!isFullNameValid) return "Name must contain at least 5 characters";
  }

  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid)
    return "Password is not valid. Password must have at least 6 characters with 1 Uppercase, 1 Lowercase and 1 special character";

  return null;
};
