import { useState } from "react";
import useAuthStore from "../../store/auth/authStore";
import {
  validateUserCredentials,
  validateUserInfo,
} from "../../utils/validations";

function AuthForm({formType}) {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [password, setPassword] = useState(false);

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

  return <form onSubmit={handleFormSubmit}>AuthForm</form>;
}

export default AuthForm;
