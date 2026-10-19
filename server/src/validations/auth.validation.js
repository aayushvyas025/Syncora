export const userInfoValidator = (
  validationType = "",
  fullname,
  email,
  password,
) => {

  if (
    validationType.toLowerCase() === "signup" &&
    (typeof fullname !== "string" || !fullname.trim())
  ) {
    return { isValid: false, field: `fullname is required` };
  }

  if (typeof email !== "string" || !email.trim() || !email.includes("@")) {
    return { isValid: false, field: `email is required` };
  }

  if (typeof password !== "string" || !password.trim() || password.length < 6) {
    return {
      isValid: false,
      field:
        password.length < 6
          ? `password should be 6 characters long`
          : `password is required`,
    };
  }

  return { isValid: true, field: null };
};
