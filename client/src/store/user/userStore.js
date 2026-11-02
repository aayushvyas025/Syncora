import { create } from "zustand";
import API from "../../configs/axios/axios";

const useUserStore = create((set) => ({
  users: [],
  error: null,
  selectedUser: null,
  messages: [],
  isUserLoading: false,
  isMessagesLoading: false,
  setSelectedUser: (user) => set({ selectedUser: user }),
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
  fetchMessages: async (userId) => {
    set({ isMessagesLoading: true, error: null });

    try {
      const { data } = await API.get(`/message/${userId}`);
      set({ messages: data?.messages });
      return {
        success: true,
        message: data?.message,
        userMessages: data?.messages,
      };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        `Error, while fetching messages: ${error.message}`;
      console.log(message);
      set({ error: message });
      return { success: false, message, userMessages: null };
    } finally {
      set({ isMessagesLoading: false });
    }
  },
}));

export default useUserStore;
