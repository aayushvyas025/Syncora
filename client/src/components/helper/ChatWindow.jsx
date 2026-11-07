import { useEffect, useRef } from "react";
import UserChat from "./UserChat";

function ChatWindow({ messages, selectedUser }) {
   const lastMessageRef = useRef(null);
  
    useEffect(() => {
      const timer = setTimeout(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, 50);
   
  () => clearTimeout(timer)
    }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <UserChat
          key={message._id}
          message={message}
          selectedUser={selectedUser}
        />
      ))}
      <div ref={lastMessageRef} />
    </div>
  );
}

export default ChatWindow;
