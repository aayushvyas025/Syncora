import { X } from "lucide-react";
import Avatar from "./Avatar";

function ChatHeader({ user, closeWindow, isOnline }) {
  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar image={user?.profilePic} alt={user?.fullname} />
          <div>
            <h3 className="font-medium">{user?.fullname || "User"}</h3>
            <p className="text-sm text-base-content/70">
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>
        <button onClick={closeWindow} className="btn-ghost rounded-full p-2">
          <X />
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
