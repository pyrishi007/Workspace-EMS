import { toast } from "react-toastify";
import { signInandUpTostify } from "./tostify";

const setLocalStorangeUser = (
  userFullname, //username
  userPassword, //userPassword
  userEmail, //userEmail
  userType, //userType
  handleUser,
) => {
  // setting user ojbect
  const userValue = {
    userType: userType,
    username: userFullname,
    userEmail: userEmail,
    userPassword: userPassword,
  };

  // getuser
  const userData = JSON.parse(localStorage.getItem(userType)) || [];

  /*
   checking if user is already present or not, 
   if yes - return
   if no - register in localStorange
   */

  if (userData.find((e) => e.userEmail === userEmail)) {
    handleUser(userEmail, userPassword, userType);
    toast.success(`${userFullname}, welcome back`, signInandUpTostify);
    return;
  } else {
    userData.push(userValue); // append user
    localStorage.setItem(userType, JSON.stringify(userData)); //SetUser
    handleUser(userEmail, userPassword, userType);
    toast.success(
      `${userFullname}, Successfully registered`,
      signInandUpTostify,
    );
  }
};

export default setLocalStorangeUser;
