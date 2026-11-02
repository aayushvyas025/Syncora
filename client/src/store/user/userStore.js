import { create } from "zustand";
import API from "../../configs/axios/axios";

const useUserStore = create((set) => ({
  users: [],
  error: null,
  selectedUser: null,
  messages: [],
  isUserLoading: false,
  isMessagesLoading: false,
  fetchAllUsers: async () => {
    set({ isUserLoading: true, error: null });
    try {
      const { data } = await API.get("/user/all");
      set({ users: data?.users });
      return { success: true, message: data?.message, users: data?.users };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        `Error, while get all users: ${error.message}`;
      console.log(message);
      set({ error: message });
      return { success: false, message, users: null };
    } finally {
      set({ isUserLoading: false });
    }
  },
}));

export default useUserStore;
