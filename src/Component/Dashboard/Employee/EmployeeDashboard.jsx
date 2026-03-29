import Boards from "./Boards";

const EmployeeDashboard = ({setUser, userData }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Boards setUser={setUser} userData={userData} />
    </div>
  );
};

export default EmployeeDashboard;
