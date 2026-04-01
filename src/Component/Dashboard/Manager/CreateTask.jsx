import { useState } from "react";

const CreateTask = ({ managerEmail }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [assignedBy] = useState(managerEmail);
  const [status] = useState("pending");
  const [priority, setPriority] = useState("medium");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };



  return (
    <div className="flex items-center justify-center">
      <div className="w-full  bg-white shadow-xl rounded-2xl border border-blue-200 p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Assign New Task
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Fill in task details and assign it to an employee
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Task Title */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Enter task title"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Task Description
            </label>
            <textarea
              rows="4"
              placeholder="Describe task objectives..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
              required
            />
          </div>

          {/* Assign Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Assign To (Employee Email)
            </label>
            <input
              type="email"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
              required
            />
          </div>

          {/* Priority + Deadline */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Priority */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Priority Level
              </label>
              <select
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Deadline
              </label>
              <input
                type="date"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg shadow-sm transition duration-200"
          >
            Assign Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
