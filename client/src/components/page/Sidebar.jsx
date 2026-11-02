import { useEffect } from "react";
import useUserStore from "../../store/user/userStore";
import { errorToast } from "../../utils/toast";

function Sidebar() {
  const { users, fetchAllUsers } = useUserStore();

  async function handleFetchAllUsers() {
    const { success, message } = await fetchAllUsers();
    if (!success) {
      errorToast(message);
    }
  }

  useEffect(() => {
    handleFetchAllUsers();
  }, [fetchAllUsers]);


  return <div>Sidebar</div>;
}

export default Sidebar;
