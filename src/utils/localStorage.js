import { toast } from "react-toastify";

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
    toast.success(`${userFullname}, welcome back`, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeButton: false,
      style: {
        background: "linear-gradient(135deg, #000000, #1a1a1a)",
        color: "#ffffff",
        borderRadius: "14px",
        padding: "14px 18px",
        fontWeight: "500",
        boxShadow: "0px 6px 24px rgba(0,0,0,0.35)",
        letterSpacing: "0.3px",
      },
    });
    return;
  } else {
    userData.push(userValue); // append user
    localStorage.setItem(userType, JSON.stringify(userData)); //SetUser
    handleUser(userEmail, userPassword, userType);
    alert(`Welocme ${userFullname}`);
  }
};

export default setLocalStorangeUser;
