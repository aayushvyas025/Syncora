import { useEffect, useState } from "react";
import useUserStore from "../../store/user/userStore";
import { errorToast } from "../../utils/toast";
import SidebarSkeleton from "../skeletons/SidebarSkeleton";
import SidebarHeader from "../helper/SidebarHeader";
import SidebarUsers from "../helper/SidebarUsers";
import useAuthStore from "../../store/auth/authStore";
import OnlineUserFilters from "../helper/OnlineUserFilters";

function Sidebar() {
  const [showOnlineUsers, setShowOnlineUsers] = useState(false);
  const { users, fetchAllUsers, setSelectedUser, selectedUser, isUserLoading } =
    useUserStore();
  const { onlineUsers } = useAuthStore();
  const filteredUsers = showOnlineUsers
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  async function handleFetchAllUsers() {
    const { success, message } = await fetchAllUsers();
    if (!success) {
      errorToast(message);
    }
  }

  useEffect(() => {
    handleFetchAllUsers();
  }, [fetchAllUsers]);

  if (isUserLoading)
    return <SidebarSkeleton skeletonContacts={Array(4).fill(null)} />;

  return (
    <div className="h-full w-20 lg:w-72 border-b border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b-2 border-base-300 w-full p-5 border-r-2">
        <SidebarHeader />
        <OnlineUserFilters
          title={"Show online only"}
          filteredUser={showOnlineUsers}
          filterUsers={(event) => setShowOnlineUsers(event.target.checked)}
          totalOnlineUsers={`${parseInt(onlineUsers.length - 1)} online`}
        />
      </div>
      <div className="overflow-y-auto w-full py-3 border-r-2 border-base-300 h-full">
        {filteredUsers.map((user) => (
          <SidebarUsers
            key={user._id}
            onClick={() => setSelectedUser(user)}
            selectedUser={selectedUser}
            user={user}
            onlineUsers={onlineUsers}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
