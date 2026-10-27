import { useState } from "react";
import useAuthStore from "../../store/auth/authStore";
import {
  validateUserCredentials,
  validateUserInfo,
} from "../../utils/validations";
import Input from "./Input";
import { Lock, Mail, User } from "lucide-react";

function AuthForm({ formType }) {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { isSigningUp, signupUser, isLoggingIn, loginUser } = useAuthStore();

  async function handleSignup() {
    const { isValid, error } = validateUserInfo({
      fullname: formData.fullname,
      email: formData.email,
      password: formData.password,
    });

    if (!isValid) {
    }
  }

  async function handleLogin() {
    const { isValid, error } = validateUserCredentials({
      email: formData.email,
      password: formData.password,
    });

    if (!isValid) {
    }
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleFormSubmit} className="w-full space-y-6">
      {formType === "signup" && (
        <Input
          type="text"
          icon={User}
          placeholder={"Fullname"}
          value={formData.fullname}
          onChange={(event) =>
            setFormData({ ...formData, fullname: event.target.value })
          }
        />
      )}
      <Input
        type="email"
        icon={Mail}
        placeholder={"Email"}
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.email })
        }
      />
      <Input
        type={showPassword ? "text" : "password"}
        icon={Lock}
        placeholder={"Password"}
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
        passwordField={true}
        showPassword={showPassword}
        handleShowPassword={() => setShowPassword(!showPassword)}
      />
    </form>
  );
}

export default AuthForm;
