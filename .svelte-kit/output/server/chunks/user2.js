import { w as writable } from "./index.js";
const getStoredUserRole = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userRole") || "enduser";
  }
  return "enduser";
};
const userRole = writable(getStoredUserRole());
userRole.subscribe((value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("userRole", value);
  }
});
export {
  userRole as u
};
