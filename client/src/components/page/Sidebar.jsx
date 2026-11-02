import { useEffect } from "react";
import useUserStore from "../../store/user/userStore";
import { errorToast } from "../../utils/toast";
import SidebarSkeleton from "../skeletons/SidebarSkeleton";

function Sidebar() {
  const { users, fetchAllUsers, setSelectedUser, selectedUser, isUserLoading } =
    useUserStore();
  const onlineUsers = [];

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

  return <div>Sidebar</div>;
}

export default Sidebar;
