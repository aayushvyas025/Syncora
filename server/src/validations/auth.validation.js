export const userInfoValidator = (fullname, email, password) => {
  if (typeof fullname !== "string" || !fullname.trim()) {
    return { isValid: false, error: `fullname is required` };
  }

  if (typeof email !== "string" || !email.trim()) {
    return { isValid: false, error: `email is required` };
  }

  if (!email.includes("@")) {
    return { isValid: false, error: "Invalid email address" };
  }

  if (typeof password !== "string" || !password.trim()) {
    return {
      isValid: false,
      error: `password is required`,
    };
  }

  return { isValid: true, error: null };
};

export const userCredValidator = (email, password) => {
 if (typeof email !== "string" || !email.trim()) {
    return { isValid: false, error: `email is required` };
  }

  if (!email.includes("@")) {
    return { isValid: false, error: "Invalid email address" };
  }

  if (typeof password !== "string" || !password.trim()) {
    return {
      isValid: false,
      error: `password is required`,
    };
  }

  return { isValid: true, error: null };
};
