function SidebarUsers({ onClick, selectedUser, user, onlineUsers }) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-3 flex items-center gap-3 hover:bg-base-300 transition-colors ${selectedUser?._id === user?._id ? "bg-base-300 ring-1 ring-base-300" : ""}`}
    >
      <div className="relative shrink-0">
        <img
          src={user.profilePic || "./profile-pic.avif"}
          alt={user.fullname}
          className="size-12 object-cover rounded-full"
        />
        {onlineUsers.includes(user._id) && (
          <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-200" />
        )}
      </div>

      <div className="hidden lg:block text-left min-w-0">
        <div className="font-medium truncate">{user.fullname}</div>
        <div className="text-sm text-zinc-400">
          {onlineUsers.includes(user._id) ? "Online" : "Offline"}
        </div>
      </div>
    </button>
  );
}

export default SidebarUsers;
