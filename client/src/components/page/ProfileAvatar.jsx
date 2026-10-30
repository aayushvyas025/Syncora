import { Camera } from "lucide-react";
import ImageUploader from "../form/ImageUploader";

function ProfileAvatar({ user, updatingProfile }) {
  async function handleImageUpload() {}

  async function handleProfileUpdate() {}

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
            {updatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
        </p>
    </div>
  );
}

export default ProfileAvatar;
