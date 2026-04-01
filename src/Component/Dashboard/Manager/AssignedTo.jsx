import React from "react";

const AssignedTo = () => {
  const tasks = [
    {
      id: 1,
      title: "Design Login Page",
      assignedTo: "john@email.com",
      deadline: "12 Apr 2026",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "API Integration",
      assignedTo: "sarah@email.com",
      deadline: "18 Apr 2026",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Dashboard UI Update",
      assignedTo: "david@email.com",
      deadline: "22 Apr 2026",
      priority: "Low",
      status: "Completed",
    },
    {
      id: 3,
      title: "Dashboard UI Update",
      assignedTo: "david@email.com",
      deadline: "22 Apr 2026",
      priority: "Low",
      status: "Completed",
    },
    {
      id: 3,
      title: "Dashboard UI Update",
      assignedTo: "david@email.com",
      deadline: "22 Apr 2026",
      priority: "Low",
      status: "Completed",
    },
    {
      id: 3,
      title: "Dashboard UI Update",
      assignedTo: "david@email.com",
      deadline: "22 Apr 2026",
      priority: "Low",
      status: "Completed",
    },
    {
      id: 3,
      title: "Dashboard UI Update",
      assignedTo: "david@email.com",
      deadline: "22 Apr 2026",
      priority: "Low",
      status: "Completed",
    },
    {
      id: 3,
      title: "Dashboard UI Update",
      assignedTo: "david@email.com",
      deadline: "22 Apr 2026",
      priority: "Low",
      status: "Completed",
    },
  ];

  const priorityColors = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-600",
  };

  const statusColors = {
    Pending: "text-gray-500",
    "In Progress": "text-blue-500",
    Completed: "text-green-600",
  };
  return (
    <div className="bg-white border border-blue-200 shadow-md rounded-2xl p-6 flex flex-col h-153.75">
      {/* Header */}
      <div className="border-b flex items-end justify-between border-blue-100 pb-3">
        <h2 className="text-3xl font-semibold text-black">Assigned Tasks</h2>
        <h1 className="text-sm font-mono bg-blue-400 text-gray-50 px-4 py-1 rounded-full">
          {" "}
          All task: {tasks.length}{" "}
        </h1>
      </div>
      <span className="text-sm mt-3 text-center text-gray-400">
        Manager → Employees
      </span>

      {/* Scrollable Task List */}
      <div className="mt-5 space-y-4 overflow-y-auto pr-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200"
          >
            {/* Top Row */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800">{task.title}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Assigned to: {task.assignedTo}
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${priorityColors[task.priority]}`}
              >
                {task.priority}
              </span>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between mt-3 text-xs">
              <span className="text-gray-400">Deadline: {task.deadline}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedTo;
