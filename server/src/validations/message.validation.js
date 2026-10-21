export function messageInfoValidation(text, image) {
  if (typeof text !== "string" || !text.trim()) {
    return { isValid: false, field: "text required" };
  }

  if (typeof image !== "string" || !image.trim()) {
    return { isValid: false, field: "image required" };
  }

  return { isValid: true, field: null };
}
