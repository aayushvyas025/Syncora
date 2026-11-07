import useAuthStore from "../../store/auth/authStore";
import { dateFormatter } from "../../utils/formatter";

function UserChat({ message, selectedUser }) {
  const { authUser } = useAuthStore();
  return (
    <div
      className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
    >
      <div className="chat-image avatar">
        <div className="size-10 rounded-full border">
          <img
            src={
              message.senderId === authUser._id
                ? authUser.profilePic
                : selectedUser.profilePic || "/profile-pic.avif"
            }
            alt={
              message.senderId === authUser._id
                ? authUser.fullname
                : selectedUser.fullname || "profile picture"
            }
          />
        </div>
      </div>
      <div className="chat-header mb-1">
        <time className="text-xs opacity-50 ml">{dateFormatter(message.createdAt)}</time>
      </div>
      <div className="chat-bubble flex flex-col">
        {message.image && (
          <img
            src={message.image}
            alt={"attachments"}
            className="sm:max-w-[200px] rounded-md mb-2"
          />
        )}
        {message.text && <p>{message.text}</p>}
      </div>
    </div>
  );
}

export default UserChat;
