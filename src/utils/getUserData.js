const getUserData = () => {
  const employee = JSON.parse(localStorage.getItem("employee"));
  const manager = JSON.parse(localStorage.getItem("manager"));

  return {
    employee,
    manager,
  };
};

export default getUserData;
