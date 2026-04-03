import { toast } from "react-toastify";
import { taskAddedTostify } from "./tostify";

export const getTaskData = (task) => {
  //localStorage.clear();
  const newTask = JSON.parse(localStorage.getItem("allTask")) || [];
  newTask.push(task);

  //Setting data
  localStorage.setItem("allTask", JSON.stringify(newTask));
  toast.success("New task added", taskAddedTostify);
};
