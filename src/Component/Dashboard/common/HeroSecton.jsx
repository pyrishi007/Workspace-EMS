import { capitalizeName } from "../../../utils/emailAndPasswordValidation";

const HeroSecton = ({ userData }) => {


  return (
    <>
      <div className="flex flex-col mb-6 gap-3 text-center">
        <h1 className="font-bold text-5xl text-blue-600">
          Workspace {capitalizeName(userData.userType)} Dashboard
        </h1>

        <p className="tracking-wide text-sm text-gray-500 mx-20">
          Welcome back. This dashboard provides a complete overview of your work
          activities including assigned tasks, pending actions, and daily
          progress. Stay organized by tracking your responsibilities, managing
          your to-do list, and reviewing updates from your team or manager.
        </p>
      </div>

      <div className="mb-16 flex justify-center">
        <div className="w-full max-w-5xl bg-white/70 backdrop-blur-md rounded-full shadow-lg px-10 py-6 flex items-center gap-8">
          <img
            src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
          />

          <div className="flex flex-col gap-2 flex-1">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-semibold text-gray-800">
                {capitalizeName(userData.username)}
              </h1>

              <span className="text-xs font-mono px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-bold tracking-wide">
                EMS1024
              </span>
            </div>

            {/* Role */}
            <p className="text-sm text-gray-500">
              SDE-II • Full Stack Developer
            </p>

            {/* Info Row */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-1">
              <span>Desgination: Engineering</span>
              <span>Grade: 110</span>
              <span>Location: Bangalore</span>
            </div>

            {/* Status */}
            <div className="flex gap-3 mt-2">
              <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full font-medium">
                Active
              </span>

              <span className="px-3 py-1 text-xs bg-purple-100 text-purple-600 rounded-full font-medium">
                Full Time
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSecton;
