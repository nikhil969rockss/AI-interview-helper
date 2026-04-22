export const isUserTest = (user) => {
  if (
    user?.username?.trim()?.toLowerCase() === "test" ||
    user?.email?.trim()?.toLowerCase() === "test@test.com"
  ) {
    return true;
  }
  return false;
};
