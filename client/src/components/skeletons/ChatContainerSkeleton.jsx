import ChatHeader from "../helper/ChatHeader";
import MessageInput from "../form/MessageInput";
import ChatWindowSkeleton from "./ChatWindowSkeleton";

function ChatContainerSkeleton() {
  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <ChatWindowSkeleton />
      <MessageInput />
    </div>
  );
}

export default ChatContainerSkeleton;
