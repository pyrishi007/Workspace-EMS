const EmpWorkingPanel = () => {
  return (
    <div>

      <div className="mb-10">
        <h1 className="text-center font-bold text-3xl text-blue-600">
          Task Activity Panel
        </h1>

        <p className="text-center mt-2 mb-5 text-gray-600 max-w-2xl mx-auto">
          Daily Goals • Tasks Overview • Daily Roles
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4">

        <div className="min-w-[220px] h-64 bg-red-400 rounded-lg"></div>
        <div className="min-w-[220px] h-64 bg-red-400 rounded-lg"></div>
        <div className="min-w-[220px] h-64 bg-red-400 rounded-lg"></div>
        <div className="min-w-[220px] h-64 bg-red-400 rounded-lg"></div>
        <div className="min-w-[220px] h-64 bg-red-400 rounded-lg"></div>
        <div className="min-w-[220px] h-64 bg-red-400 rounded-lg"></div>

      </div>

    </div>
  );
};

export default EmpWorkingPanel;
