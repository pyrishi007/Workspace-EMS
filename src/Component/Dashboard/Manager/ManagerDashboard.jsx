import ManagerBoards from "./ManagerBoards";

const ManagerDashboard = ({ setUser, userData }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ManagerBoards setUser={setUser} userData={userData} />
    </div>
  );
};

export default ManagerDashboard;
