import { create } from "zustand";
import API from "../../configs/axios/axios";

const useAuthStore = create((set) => ({
  isSigningUp: false,
  isError: null,
  authUser: null,
  isCheckingAuth: true,
  isLoggingIn: false,
  isLoggedOut: false,
  isUpdatingProfile: false,
  signupUser: async ({ fullname, email, password }) => {
    set({ isSigningUp: true, isError: null });
    try {
      const { data, message } = await API.post("/auth/signup", {
        fullname,
        password,
        email,
      });

      set({ authUser: data?.newUser });
      return { success: true, message, newUser: data?.newUser };
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        `Error, while signup user ${error.message}`;
      console.error(message);

      set({ isError: message });
      return { success: false, message: data?.message, newUser: null };
    } finally {
      set({ isSigningUp: false });
    }
  },
  checkAuth: async () => {
    set({ isCheckingAuth:true, isError: null });
    try {
      const { data } = await API.get("/user/authenticated");

      set({ authUser: data?.authUser });

      return { success: true, message: data?.message, authUser: data?.authUser };
    } catch (error) {
      const message =
         error.response?.data?.message ||
        `Error, while check Auth ${error.message}`;

      console.log(message);
      set({ isError: message, authUser: null });
      return { success: false, message, authUser: null };
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
