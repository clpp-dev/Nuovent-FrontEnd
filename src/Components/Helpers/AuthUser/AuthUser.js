import jwt from "jwt-decode";

let userToken = localStorage.getItem("token");

export const AuthUser = () => {
  let userInSession = userToken != null || "" ? true : false;
  return userInSession;
};

// export const AuthBussines = () => {
//   userToken != null || ""
//     ? (() => {
//         const decoded = jwt(userToken);
//         const stateUser = decoded.claims.state;
//         console.log("🚀 ~ file: AuthUser.js ~ validateUser", stateUser);
//         return stateUser;
//       })
//     : "";
// };
