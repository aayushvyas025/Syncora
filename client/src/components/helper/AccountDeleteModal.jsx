import { OctagonAlert } from "lucide-react";

function AccountDeleteModal({ closeModal, handleDeleteAccount }) {
  return (
    <div
      role="alert"
      className="alert alert-vertical sm:alert-horizontal"
    >
      <OctagonAlert className="size-5" />
      <span>You're going to delete your 'Account'</span>
      <div>
        <button className="btn btn-sm" onClick={closeModal}>
          No, Keep it
        </button>
        <button
          className="btn btn-sm btn-primary mx-1"
          onClick={handleDeleteAccount}
        >
          Yes, Delete!
        </button>
      </div>
    </div>
  );
}

export default AccountDeleteModal;
