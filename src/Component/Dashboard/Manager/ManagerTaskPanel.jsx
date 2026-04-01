import CreateTask from "./CreateTask";
import AssignedTo from "./AssignedTo";

const ManagerTaskPanel = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="text-center font-bold text-3xl text-blue-600">
        Task Workflow
      </h1>

      <p className="tracking-wide text-sm m-2 text-gray-500 mx-20">
        Manage and monitor task assignments efficiently.
      </p>

      <div className="grid grid-cols-[700px_550px] mt-5 gap-20">
        <div className="flex flex-col">
          <CreateTask />
        </div>
        <div className="">
          <AssignedTo />
        </div>
      </div>
    </div>
  );
};

export default ManagerTaskPanel;
