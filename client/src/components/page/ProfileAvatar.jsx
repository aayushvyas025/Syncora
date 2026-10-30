import { Camera } from "lucide-react";

function ProfileAvatar({ user, updatingProfile }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <img
          src={user.profilePic || './profile-pic.avif'}
          alt={user.fullname}
          className="size-32 rounded-full object-cover border-4"
        />
        <label
          htmlFor="avatar-upload"
          className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${updatingProfile ? "animate-pulse pointers-events-none" : ""}`}
        >
          <Camera className="w-5 h-5 text-base-200" />  
        </label>
      </div>
    </div>
  );
}

export default ProfileAvatar;
