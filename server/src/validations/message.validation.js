export function messageInfoValidation(text, image) {
  if (typeof text !== "string" || !text.trim()) {
    return { isValid: false, error: "text required" };
  }

  if (typeof image !== "string" || !image.trim()) {
    return { isValid: false, error: "image required" };
  }

  return { isValid: true, error: null };
}
