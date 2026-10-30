import { Camera } from "lucide-react";

function ImageUploader({updatingProfile, onChange}) {
  return (
    <label
      htmlFor="avatar-upload"
      className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${updatingProfile ? "animate-pulse pointers-events-none" : ""}`}
    >
      <Camera className="w-5 h-5 text-base-200" />
      <input
        type="file"
        id="avatar-upload"
        className="hidden"
        accept="image/*"
        onChange={onChange}
        disabled={updatingProfile}
      />
    </label>
  );
}

export default ImageUploader;
