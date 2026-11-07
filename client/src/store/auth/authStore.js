import { create } from "zustand";
import API from "../../configs/axios/axios";
import { io } from "socket.io-client";

const useAuthStore = create((set, get) => ({
  onlineUsers: [],
  isSigningUp: false,
  error: null,
  authUser: null,
  isCheckingAuth: true,
  isLoggingIn: false,
  isLoggedOut: false,
  isUpdatingProfile: false,
  isDeleteUser: false,
  clientSocket: null,
  signupUser: async ({ fullname, email, password }) => {
    set({ isSigningUp: true, error: null });
    try {
      const { data } = await API.post("/auth/signup", {
        fullname,
        password,
        email,
      });

      set({ authUser: data?.newUser });
      get().connectSocket();
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
      get().connectSocket();
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
      get().connectSocket();
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
      get().disconnectSocket();
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
  updateProfile: async ({ profilePic }) => {
    set({ isUpdatingProfile: true, error: null });
    try {
      const { data } = await API.put("/user/update-profile", { profilePic });
      set({ authUser: data?.updatedUser });
      return {
        success: true,
        message: data?.message,
        updatedUser: data?.updatedUser,
      };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        `Error, while updating user profile: ${error.message}`;
      console.error(message);
      set({ error: message });
      return { success: false, message };
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
  deleteProfile: async (userId) => {
    set({ isDeleteUser: true, error: null });
    try {
      const { data } = await API.delete(`/user/delete/${userId}`);
      set({ authUser: null });
      get().disconnectSocket();
      return { success: true, message: data.message };
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        `Error, while delete user: ${error.message}`;
      console.error(message);
      set({ error: message });
    } finally {
      set({ isDeleteUser: false });
    }
  },
  connectSocket: () => {
    const { authUser, clientSocket } = get();
    if (!authUser || clientSocket?.connected) return;

    const socket = io(import.meta.env.VITE_BACKEND_ORIGIN, {
      withCredentials: true,
      query: {
        userId: authUser._id,
      },
    });
    socket.connect();
   
    socket.on("connect", () => {
  console.log("Connected:", socket.id);
});

socket.on("connect_error", (error) => {
  console.error("Connection error:", error.message);
});
    
    socket.on("getOnlineUsers", (userIds) => {
      set({onlineUsers: userIds})
    })
    set({ clientSocket: socket }); 

  },
  disconnectSocket: () => {
    const { clientSocket } = get();
    if (clientSocket?.connected) {
      clientSocket.disconnect();
    }
  },
}));

export default useAuthStore;
