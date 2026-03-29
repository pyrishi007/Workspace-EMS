import { capitalizeName } from "../../../utils/emailAndPasswordValidation";


const Sidebar = ({ setUser, userData }) => {
  const handleLogOut = () => {
    localStorage.setItem("SpecificUserBasedRole", null);
    setUser("");
  };

  return (
    <div className="w userData={userData}-64 h-screen sticky top-0 flex flex-col bg-gray-900 text-gray-200 p-6">
      {/* Top Section */}
      <div className="flex flex-col gap-8">
        {/* Branding */}
        <div className=" text-center">
          <h1 className="text-lg font-bold text-white">Workforce</h1>
          <p className="text-xs text-gray-400">Employee Management System</p>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center gap-3 text-center">
          <img
            src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
            alt="profile"
            className="w-20 h-20 rounded-full border-2 border-blue-500"
          />

          <div>
            <h2 className="font-semibold text-white">
              {capitalizeName(userData.username)}
            </h2>

            <p className="text-xs text-gray-400">Frontend Developer</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2 text-sm">
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
            Dashboard
          </button>

          <button className="px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            My Tasks
          </button>

          <button className="px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Notifications
          </button>

          <button className="px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Settings
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-23">
        {/* Logout */}
        <button
          onClick={handleLogOut}
          className="w-full font-mono font-bold tracking-wide mb-6 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
        >
          Logout
        </button>

        {/* Professional Footer */}
        <div className="border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
          <p className="font-semibold text-gray-300">Workforce Ltd</p>

          <p>Empowering teams through smart management</p>

          <p className="mt-1">© 2026 Workforce Technologies</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
