import React from "react";

export const Logout = () => {
  localStorage.removeItem('token')
};
