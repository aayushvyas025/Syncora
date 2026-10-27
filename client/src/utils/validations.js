export function validateUserInfo({ fullname, email, password }) {
  if (typeof fullname !== "string" || !fullname.trim()) {
    return { isValid: false, error: "fullname required" };
  }

  if (typeof email !== "string" || !email.trim()) {
    return { isValid: false, error: "email required" };
  }

  if (!email.includes("@")) {
    return { isValid: false, error: "Invalid email address" };
  }

  if (typeof password !== "string" || !password.trim() || password.length < 6) {
    return {
      isValid: false,
      error: "password required",
    };
  }

  if (password.length < 6) {
    return {
      isValid: false,
      error: "Password must be at least 6 characters long",
    };
  }

  return { isValid: true, error: null };
}

export function validateUserCredentials({ email, password }) {
  if (typeof email !== "string" || !email.trim()) {
    return { isValid: false, error: "email required" };
  }

  if (!email.includes("@")) {
    return { isValid: false, error: "Invalid email address" };
  }

  if (typeof password !== "string" || !password.trim() || password.length < 6) {
    return {
      isValid: false,
      error: "password required",
    };
  }

  if (password.length < 6) {
    return {
      isValid: false,
      error: "Password must be at least 6 characters long",
    };
  }

  return { isValid: true, error: null };
}
