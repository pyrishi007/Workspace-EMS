import ManagerBoards from "./ManagerBoards";
import ManagerTaskPanel from "./ManagerTaskPanel";

const ManagerDashboard = ({ setUser, userData }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ManagerBoards setUser={setUser} userData={userData} />
    </div>
  );
};

export default ManagerDashboard;
