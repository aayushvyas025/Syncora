export const updateUserProfile = (request, response, next) => {
  try {
    const { id } = request.params;
    const { profilePic } = request.body;
  } catch (error) {
    console.error(`Error, while updating user profile: ${error.message}`);
    next(error);
  }
};
