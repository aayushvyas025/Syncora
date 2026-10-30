import { useState } from "react";
import AccountDeleteModal from "../helper/AccountDeleteModal";
import { errorToast, successToast } from "../../utils/toast";

function AccountInfo({ user, deleteProfile }) {
  const [deleteUser, setDeleteUser] = useState(false);

  async function handleDeleteUser() {
    const { success, message } = await deleteProfile(user._id);
    if (!success) {
      errorToast(message);
    }

    successToast(message);
  }
  return (
    <div className="mt-6 bg-base-300 rounded-xl p-6">
      <h2 className="text-lg font-medium mb-4">Account Information</h2>
      <div className="space-y-3 text-sm mb-2">
        <div className="flex items-center justify-between py-2 border-b border-zinc-700">
          <span>Member Since</span>
          <span>
            {user ? user.createdAt?.split("T")[0] : "---------------"}
          </span>
        </div>
      </div>
      <div className="space-y-3 text-sm mb-2">
        <div className="flex items-center justify-between py-2 border-b border-zinc-700">
          <span>Account Status</span>
          <span className="text-green-500 p-2">Active</span>
        </div>
        <div className="space-y-3 text-sm mb-2">
          <div className="flex items-center justify-between py-2">
            <span>Account Delete</span>
            <button
              className="text-red-500 btn-ghost rounded-xl p-2"
              onClick={() => setDeleteUser(true)}
            >
              Delete
            </button>
          </div>
          {deleteUser && (
            <AccountDeleteModal
              closeModal={() => setDeleteUser(!deleteUser)}
              handleDeleteAccount={handleDeleteUser}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
