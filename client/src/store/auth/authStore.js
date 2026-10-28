import { create } from "zustand";
import API from "../../configs/axios/axios";

const useAuthStore = create((set) => ({
  isSigningUp: false,
  error: null,
  authUser: null,
  isCheckingAuth: true,
  isLoggingIn: false,
  isLoggedOut: false,
  isUpdatingProfile: false,
  signupUser: async ({ fullname, email, password }) => {
    set({ isSigningUp: true, error: null });
    try {
      const { data } = await API.post("/auth/signup", {
        fullname,
        password,
        email,
      });

      set({ authUser: data?.newUser });
      return { success: true, message: data?.message, newUser: data?.newUser };
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        `Error, while signup user ${error.message}`;
      console.error(message);

      set({ error: message, authUser: null });
      return { success: false, message: message, newUser: null };
    } finally {
      set({ isSigningUp: false });
    }
  },
  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const { data } = await API.get("/user/authenticated");

      set({ authUser: data?.authUser });

      return {
        success: true,
        message: data?.message,
        authUser: data?.authUser,
      };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        `Error, while check Auth ${error.message}`;

      console.error(message);
      set({ error: message, authUser: null });
      return { success: false, message, authUser: null };
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  loginUser: async ({ email, password }) => {
    set({ isLoggingIn: true, isError: null });
    try {
      const { data } = await API.post("/auth/login", { email, password });
      set({ authUser: data?.loginUser });
      return {
        success: true,
        message: data?.message,
        loginUser: data?.loginUser,
      };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        `Error, while login user: ${error.message}`;
      console.error(message);
      set({ error: message, authUser: null });
      return { success: false, message, user: null };
    } finally {
      set({ isLoggingIn: false });
    }
  },
  logoutUser: async () => {
    set({ isLoggedOut: true, error: null });
    try {
      const { data } = await API.post("/auth/logout");
      set({ authUser: null });
      return { success: true, message: data.message };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        `Error, while logout user: ${error.message}`;
      set({ error: message });
      return { success: false, message, authUser: null };
    } finally {
      set({ isLoggedOut: false });
    }
  },
}));

export default useAuthStore;
