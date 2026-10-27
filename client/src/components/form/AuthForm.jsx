import { useState } from "react";
import useAuthStore from "../../store/auth/authStore";
import {
  validateUserCredentials,
  validateUserInfo,
} from "../../utils/validations";
import Input from "./Input";
import { Lock, Mail, User } from "lucide-react";
import SubmitBtn from "../helper/SubmitBtn";
import { errorToast, successToast } from "../../utils/toast";

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
      errorToast(error);
      return;
    }

    try {
      const { success, message } = await signupUser({
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password,
      });

      if (!success) {
        errorToast(message);
        return;
      }

      successToast(message);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      errorToast("Something went wrong. Please try again.");
    }
  }

  async function handleLogin() {
    const { isValid, error } = validateUserCredentials({
      email: formData.email,
      password: formData.password,
    });

    if (!isValid) {
      errorToast(error);
      return;
    }

    try {
      const { success, message } = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      if (!success) {
        errorToast(message);
        return;
      }

      successToast(message);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      errorToast("Something went wrong. Please try again.");
    }
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    switch (formType) {
      case "signup":
        await handleSignup();
        return;

      case "login":
        await handleLogin();
        return;

      default:
        console.warn(`Unknown, form type: ${formType}`);
        return;
    }
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
          setFormData({ ...formData, email: event.target.value })
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
      <SubmitBtn
        title={formType === "signup" ? "Create Account" : ""}
        loading={formType === "signup" ? isSigningUp : isLoggingIn}
        disabled={formType === "signup" ? isSigningUp : isLoggingIn}
      />
    </form>
  );
}

export default AuthForm;
