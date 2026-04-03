import { getuserSpecifictask } from "../../../utils/getuserSpecifictask";

const EmpTaskPanel = ({ userData }) => {

  const eachUserBasedTask = getuserSpecifictask(userData.userEmail);

  return (
    <div className="mb-16 ">
      <h1 className="  text-center font-bold text-3xl text-blue-600">
        Everyday Task Panel
      </h1>

      <p className="text-center mt-2 mb-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Daily Goals • Tasks Overview • Daily Roles
      </p>

      <div className="flex flex-nowrap gap-10 ">
        {/* Active Task */}
        <div className="w-[45%] shadow-xl rounded-xl bg-green-100 cursor-pointer">
          <div className="flex justify-between p-5 items-center">
            <h1 className="font-bold text-xl text-blue-700">Active Tasks</h1>
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          </div>
          <div className="flex font-mono justify-between px-8 py-5 items-center">
            <h1 className="font-extrabold text-blue-700 text-3xl">{eachUserBasedTask.length}</h1>
            <p>Pending tasks</p>
          </div>
        </div>

        {/* Completed Task */}
        <div className="w-[45%] shadow-xl rounded-xl bg-blue-100 cursor-pointer">
          <div className="flex justify-between p-5 items-center">
            <h1 className="font-bold text-xl text-blue-800">Completed Tasks</h1>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
          <div className="flex font-mono justify-between px-8 py-5 items-center cursor-pointer">
            <h1 className="font-extrabold text-blue-800 text-3xl">2</h1>
            <p>Pending tasks</p>
          </div>
        </div>

        {/* Accepted Task */}
        <div className="w-[45%] shadow-xl  rounded-xl bg-blue-200 cursor-pointer">
          <div className="flex justify-between p-5 items-center">
            <h1 className="font-bold text-xl text-blue-900">Accepted Tasks</h1>
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          </div>
          <div className="flex font-mono justify-between px-8 py-5 items-center">
            <h1 className="font-extrabold text-blue-900 text-3xl">5</h1>
            <p>Pending tasks</p>
          </div>
        </div>

        {/* Deleted Task */}
        <div className="w-[45%] shadow-xl rounded-xl bg-red-100 cursor-pointer">
          <div className="flex justify-between p-5 items-center">
            <h1 className="font-bold text-xl text-red-600">Deleted Tasks</h1>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          <div className="flex font-mono justify-between px-8 py-5 items-center">
            <h1 className="font-extrabold text-red-600 text-3xl">4</h1>
            <p>Pending tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpTaskPanel;
