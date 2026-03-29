const emailAndPasswordValidation = (email, password, username) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/.test(password);
  const isUsernameValid = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(username);

  if (!isEmailValid || !isPasswordValid) return "Invalid Email or Passowrd";

  return null;
};

export const capitalizeName = (name) =>
  name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export default emailAndPasswordValidation;
