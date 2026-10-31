import { Suspense } from "react";
import Layout from "../../layout/Layout";
import useAuthStore from "../../store/auth/authStore";
import ProfileHeader from "../../components/page/ProfileHeader";
import ProfileAvatar from "../../components/page/ProfileAvatar";
import ProfileInfo from "../../components/page/ProfileInfo";
import AccountInfo from "../../components/page/AccountInfo";
import AppLoader from "../../components/helper/AppLoader";

function Profile() {
  const {
    authUser,
    isUpdatingProfile,
    updateProfile,
    deleteProfile,
    isDeleteUser,
  } = useAuthStore();

  if (isDeleteUser) {
    return <AppLoader />;
  }

  return (
    <Suspense>
      <Layout style={"min-h-screen pt-20"}>
        <div className="max-w-2xl mx-auto p-4 py-8">
          <div className="bg-base-300 rounded-xl p-6 space-y-8">
              <ProfileHeader />
              <ProfileAvatar
                user={authUser}
                updatingProfile={isUpdatingProfile}
                updateProfile={updateProfile}
              />
              <ProfileInfo user={authUser} />
              <AccountInfo user={authUser} deleteProfile={deleteProfile} />
            </div>
          </div>
      </Layout>
    </Suspense>
  );
}

export default Profile;
