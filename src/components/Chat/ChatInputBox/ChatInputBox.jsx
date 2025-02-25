import { useState } from "react";
import { SendHorizonal } from "lucide-react";

export default function ChatInputBox({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;
    console.log("Sent Message:", message);
    onSend(message);
    setMessage("");
  };

  return (
    <div className="p-3 border-t flex gap-2 items-center bg-white">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-grow p-2 border rounded-md focus:outline-none h-10"
      />
      <button
        onClick={handleSendMessage}
        className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
      >
        <SendHorizonal size={20} />
      </button>
    </div>
  );
}
