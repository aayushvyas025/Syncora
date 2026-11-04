import { useEffect } from "react";
import useUserStore from "../../store/user/userStore";
import { successToast } from "../../utils/toast";
import ChatHeader from "../helper/ChatHeader";
import ChatWindow from "../helper/ChatWindow";
import MessageInput from "../form/MessageInput";

function ChatContainer() {
  const { messages, fetchMessages, isMessagesLoading, selectedUser } =
    useUserStore();

  async function handleFetchMessages() {
    const { success, message } = await fetchMessages(selectedUser._id);
    if (!success) {
      successToast(message);
      return;
    }
  }

  useEffect(() => {
    handleFetchMessages();
  }, [selectedUser?._id, fetchMessages]);

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <ChatWindow />
      <MessageInput />
    </div>
  );
}

export default ChatContainer;
