import { getuserSpecifictask } from "../../../utils/getuserSpecifictask";
import { capitalizeName } from "../../../utils/emailAndPasswordValidation";

const EmpWorkingPanel = ({ userData }) => {
  const getuseTask = getuserSpecifictask(userData.userEmail) || [];

  const priortyColors = {
    high: "from-red-400 to-pink-600",
    medium: "from-blue-400 to-indigo-500",
    low: "from-green-400 to-emerald-500",
  };

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

      <div className="flex gap-6 overflow-x-auto pb-4 px-6">
        {getuseTask.map((e, idx) => (
          <div
            key={idx}
            className="min-w-[370px] 
            rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div
              className={`bg-gradient-to-r ${priortyColors[e.priority]} px-5 py-3 flex justify-between items-center text-white`}
            >
              <h2 className="font-semibold text-xl  tracking-wide">
                {capitalizeName(e.taskTitle)}
              </h2>

              <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                {e.priority.toUpperCase()}
              </span>
            </div>

            {/* Body */}
            <div className="p-5 space-y-3">
              {/* Description */}
              <p className="text-base wrap-break-word text-gray-600 text-[18px] font-semibold whitespace-normal line-clamp-10 min-h-20 leading-relaxed">
                {e.taskDescription}
              </p>

              {/* Info Row */}
              <div className="flex justify-between text-xs text-gray-500">
                <span> {e.assignedBy}</span>
                <span className="text-red-700">📅 {e.deadline}</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-5 pt-2">
                <button className="flex-1 text-xs bg-blue-400 hover:bg-blue-600 text-white py-1.5 rounded-lg transition">
                  Accept
                </button>

                <button className="flex-1 text-xs bg-green-600 hover:bg-green-600 text-white py-1.5 rounded-lg transition">
                  Complete
                </button>

                <button className="flex-1 text-xs bg-red-400 hover:bg-red-600 text-white py-1.5 rounded-lg transition">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmpWorkingPanel;
