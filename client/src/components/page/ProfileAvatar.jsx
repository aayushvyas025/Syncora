import { errorToast, successToast } from "../../utils/toast";
import { validateImage } from "../../utils/validations";
import ImageUploader from "../form/ImageUploader";

function ProfileAvatar({ user, updatingProfile, updateProfile }) {
  async function handleProfileUpdate(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      const { isValid, error } = validateImage(base64Image);

      if (!isValid) {
        errorToast(error);
        return;
      }
      const { success, message } = await updateProfile({
        profilePic: base64Image,
      });

      if (!success) {
        errorToast(message);
        return;
      }
      successToast(message);
    };
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <img
          src={user.profilePic || "./profile-pic.avif"}
          alt={user.fullname}
          className="size-32 rounded-full object-cover border-4"
        />

        <ImageUploader
          disabled={updatingProfile}
          onChange={handleProfileUpdate}
        />
      </div>
      <p className="text-sm text-zinc-400">
        {updatingProfile
          ? "Uploading..."
          : "Click the camera icon to update your photo"}
      </p>
    </div>
  );
}

export default ProfileAvatar;
