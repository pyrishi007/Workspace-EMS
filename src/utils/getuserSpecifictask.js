export const getuserSpecifictask = (userEmail) => {
  const alluserTask = JSON.parse(localStorage.getItem("allTask"));

  console.log(alluserTask);
  console.log(userEmail);

  const eachtask = alluserTask.filter((e) => {
    return e.assignedTo == userEmail;
  });

  return eachtask
};
