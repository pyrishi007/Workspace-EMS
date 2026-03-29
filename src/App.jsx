import "./App.css";
import { useEffect, useState } from "react";
import AuthForm from "./Component/Auth/AuthForm";
import getUserData from "./utils/getUserData";
import EmployeeDashboard from "./Component/Dashboard/Employee/EmployeeDashboard";
import ManagerDashboard from "./Component/Dashboard/Manager/ManagerDashboard";

const App = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Getting SpecificUserBasedRole from LS
    const loggedInUserData = JSON.parse(
      localStorage.getItem("SpecificUserBasedRole"),
    );

    if (loggedInUserData) {
      // Extracting vales out
      const role = loggedInUserData[0];
      const data = loggedInUserData[1];

      //Setting up values
      setUser(role);
      setUserData(data);
    }
  }, []);

  const handleUser = (userEmail, userPassword, userType) => {
    const userData = getUserData();
    console.log(userData);
    console.log(userType);
    console.log(userEmail);

    if (userData[userType].find((e) => userEmail === e.userEmail)) {
      //Storing specifec user Data
      const data = userData[userType]?.find((e) => userEmail === e.userEmail);

      //arr[role, data] ---->  localstorage
      localStorage.setItem(
        "SpecificUserBasedRole",
        JSON.stringify([userType, data]),
      );

      //Setting up values
      setUserData(data);
      setUser(userType);
    }
  };

  return (
    <>
      {!user && <AuthForm handleUser={handleUser} />}
      {user === "employee" && (
        <EmployeeDashboard setUser={setUser} userData={userData} />
      )}
      {user === "manager" && (
        <ManagerDashboard setUser={setUser} userData={userData} />
      )}
    </>
  );
};

export default App;
