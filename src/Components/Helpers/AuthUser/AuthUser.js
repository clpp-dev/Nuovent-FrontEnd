
export const AuthUser = () => {
  const userToken = localStorage.getItem("token");
  let userInSession = userToken != null || "" ? true : false;
  return userInSession;
};

export const Reload = () => {
  // location.reload();
};