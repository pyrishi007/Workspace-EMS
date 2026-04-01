import { useState } from "react";
import setLocalStorangeUser from "../../utils/localStorage";
import emailAndPasswordValidation from "../../utils/emailAndPasswordValidation";

const AuthForm = ({ handleUser }) => {
  const [userFullname, setUserFullname] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [use, setuse] = useState("")

  const handleForm = () => {
    // localStorage.clear()
        const errorCheck = emailAndPasswordValidation(
      userEmail,
      userPassword,
      userFullname,
    );
    setErrorMessage(errorCheck);
    if (errorCheck) return;

    setLocalStorangeUser(
      userFullname,
      userPassword,
      userEmail,
      userType,
      handleUser,
    );

    setUserFullname("");
    setUserPassword("");
    setUserEmail("");
    setUserType("");
  };

  return (
    <div className=" headerFont h-screen bg-linear-to-br from-gray-500 via-gray-300 to-gray-500 flex justify-center items-center">
      <div className="min-w-3xl overflow-hidden grid grid-cols-2 ">
        <div className="flex relative">
          <img
            src={
              "https://images.unsplash.com/photo-1652120268427-9ba66e870467?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
            }
            className="w-full h-137.5 object-cover rounded-l-xl shadow-lg "
          />
          <div className="m-10 absolute bottom-10 z-10 text-white max-w-sm">
            <h1 className="text-4xl font-bold leading-tight">
              <span className="text-blue-400 font-bold tracking-wide">
                WorkSpace
              </span>{" "}
              with EMS
            </h1>

            <p className="mt-3 font-mono opacity-60 text-gray-200 text-sm">
              An powerfull Employee Management System that can track everything
              and organize your team efficiently.
            </p>
          </div>
        </div>

        <div className="py-8 px-10 bg-white/70 backdrop-blur-md flex flex-col items-center justify-center gap-6 rounded-r-xl shadow-lg">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Register with{" "}
            <span className=" text-blue-500 font-extrabold tracking-wide">
              WorkSpace
            </span>
          </h1>

          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              value={userFullname}
              onChange={(e) => setUserFullname(e.target.value)}
              placeholder="Username"
              className="border border-gray-300 rounded-lg placeholder:text-sm placeholder:text-gray-400 px-4 py-2 outline-none focus:ring-1 focus:ring-blue-600 text-sm text-gray-800"
            />

            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Email Address"
              className="border  border-gray-300 rounded-lg px-4 py-2 placeholder:text-sm placeholder:text-gray-400 outline-none focus:ring-1 text-sm text-gray-800 focus:ring-blue-600"
            />

            <input
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder="Password"
              className="border  border-gray-300 rounded-lg px-4 py-2 placeholder:text-sm placeholder:text-gray-400 outline-none focus:ring-1 text-sm text-gray-800 focus:ring-blue-600"
            />

            <div className="flex items-center justify-between px-4 py-3 mt-3 bg-white rounded-2xl shadow-md border border-gray-200">
              <label
                htmlFor="role"
                className="text-sm font-medium text-gray-700"
              >
                Select Role
              </label>

              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                id="role"
                className="ml-4 w-40 px-3 py-2 text-sm border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 transition"
              >
                <option value="">Select</option>
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
              </select>
            </div>

            <div>
              <p className=" font-light text-sm text-red-500">{errorMessage}</p>
            </div>

            <button
              onClick={handleForm}
              className="bg-blue-500 font-mono text-white py-2 rounded-lg hover:bg-blue-700  transition"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
