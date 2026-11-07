import UserChat from "./UserChat";

function ChatWindow({ messages, selectedUser }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <UserChat
          key={message._id}
          message={message}
          selectedUser={selectedUser}
        />
      ))}
    </div>
  );
}

export default ChatWindow;
