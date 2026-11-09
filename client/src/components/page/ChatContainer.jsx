import { useEffect } from "react";
import useUserStore from "../../store/user/userStore";
import { errorToast } from "../../utils/toast";
import ChatHeader from "../helper/ChatHeader";
import ChatWindow from "../helper/ChatWindow";
import MessageInput from "../form/MessageInput";
import useAuthStore from "../../store/auth/authStore";
import ChatContainerSkeleton from "../skeletons/ChatContainerSkeleton";

function ChatContainer() {
  const {
    messages,
    fetchMessages,
    isMessagesLoading,
    selectedUser,
    sendMessages,
    subscribeToMessage,
    unsubscribeFromMessage,
  } = useUserStore();

  const { onlineUsers } = useAuthStore();

  async function handleFetchMessages() {
    const { success, message } = await fetchMessages(selectedUser?._id);
    if (!success) {
      errorToast(message);
      return;
    }
  }

  useEffect(() => {
    handleFetchMessages();
    subscribeToMessage();

    return () => unsubscribeFromMessage();
  }, [selectedUser?._id, fetchMessages]);

  if (isMessagesLoading) return <ChatContainerSkeleton />;

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader
        user={selectedUser}
        closeWindow={() => selectedUser(null)}
        isOnline={onlineUsers.includes(selectedUser?._id)}
      />
      <ChatWindow messages={messages} selectedUser={selectedUser} />
      <MessageInput sendMessages={sendMessages} />
    </div>
  );
}

export default ChatContainer;
