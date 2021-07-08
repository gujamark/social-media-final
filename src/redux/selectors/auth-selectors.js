export const authSelector = ({ auth: { isAuthenticated, userData } }) => ({
  isAuthenticated,
  userData,
});
