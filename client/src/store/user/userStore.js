import { create } from "zustand";
import API from "../../configs/axios/axios";
import useAuthStore from "../auth/authStore";

const useUserStore = create((set, get) => ({
  users: [],
  error: null,
  selectedUser: null,
  messages: [],
  isUserLoading: false,
  isMessagesLoading: false,
  setSelectedUser: (user) => set({ selectedUser: user }),
  subscribeToMessages: () => {
    const { selectedUser, messages } = get();
    if (!selectedUser) return;
    const clientSocket = useAuthStore.getState().clientSocket;
    clientSocket.on("newMessage", (newMessage) => {
      set({ messages: [...messages, newMessage] });
    });
  },
  unsubscribeFromMessage:() => {
    const clientSocket = useAuthStore.getState().clientSocket; 
    clientSocket.off('newMessage'); 
  },
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
      console.error(message);
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
      console.error(message);
      set({ error: message });
      return { success: false, message, userMessages: null };
    } finally {
      set({ isMessagesLoading: false });
    }
  },
  sendMessages: async ({ text, image }) => {
    const { selectedUser } = get();
    set({ isMessagesLoading: true, error: null });
    try {
      const { data } = await API.post(`/message/create/${selectedUser?._id}`, {
        text,
        image,
      });
      set((state) => ({ messages: [...state.messages, data?.newMessage] }));
      return { success: true, message: data?.message };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        `Error, while sending messages: ${error.message}`;
      console.error(message);
      set({ error: message });
      return { success: false, message };
    } finally {
      set({ isMessagesLoading: false });
    }
  },
}));

export default useUserStore;
