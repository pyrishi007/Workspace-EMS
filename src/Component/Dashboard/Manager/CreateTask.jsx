import { useState } from "react";
import { getTaskData } from "../../../utils/getTaskData";
import { useDispatch } from "react-redux";
import { addTask } from "../../../store/slices/taskSlice,js";

const CreateTask = ({ userData }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [assignedBy] = useState(userData.userEmail);
  const [status] = useState("pending");
  const [priority, setPriority] = useState("medium");
  const [deadline, setDeadline] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleTask = () => {
    const task = {
      taskTitle: taskTitle,
      taskDescription: taskDescription,
      assignedTo: assignedTo,
      assignedBy: assignedBy,
      deadline: deadline,
      priority: priority,
      status: status,
    };

    //Assigned task to backend[LS]
    getTaskData(task);

    const listAlltask = JSON.parse(localStorage.getItem("allTask"));
    dispatch(addTask(alltaskLS));

    //Resetin values
    setTaskTitle("");
    setTaskDescription("");
    setAssignedTo("");
    setPriority("");
    setDeadline("");
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
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
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
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              rows="4"
              placeholder="Describe task objectives..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
              required
            />
          </div>

          {/* Assign Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Assign To
            </label>
            <input
              value={assignedTo}
              onChange={(e) => {
                setAssignedTo(e.target.value);
              }}
              type="email"
              placeholder="Employee Email"
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
                value={priority}
                onChange={(e) => {
                  setPriority(e.target.value);
                }}
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
                value={deadline}
                onChange={(e) => {
                  setDeadline(e.target.value);
                }}
                type="date"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleTask}
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
