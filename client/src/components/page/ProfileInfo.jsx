import React from "react";
import UserInfo from "../helper/UserInfo";
import { Mail, User } from "lucide-react";

function ProfileInfo({ user }) {
  return (
    <div className="space-y-6">
      <UserInfo title={"Full Name"} icon={User} info={user.fullname} />
      <UserInfo title={"Email Address"} icon={Mail} info={user.email} />
    </div>
  );
}

export default ProfileInfo;
