import HeroSecton from "../common/HeroSecton";
import Sidebar from "../common/Sidebar";
import EmpTaskPanel from "./EmpTaskpanel";
import EmpWorkingPanel from "./EmpWorkingPanel";

const Boards = ({setUser, userData }) => {
  console.log(userData);

  return (
    <div className="flex flex-1 bg-gradient-to-b from-gray-100 via-gray-100 to-gray-100">
      <Sidebar setUser={setUser} userData={userData} />

      <div className="flex-1 m-8 min-w-0">
        <HeroSecton userData={userData} />

        <div className="h-px mb-8 border border-gray-400/20 mx-30"></div>

        <EmpTaskPanel userData={userData} />

        <div className="h-px mb-8 border border-gray-400/20 mx-30"></div>

        <EmpWorkingPanel userData={userData} />
      </div>
    </div>
  );
};

export default Boards;
