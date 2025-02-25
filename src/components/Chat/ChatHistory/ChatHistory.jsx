
  
  export default function ChatHistory({ chatHistory }) {
    const formatTimestamp = (timestamp) => {
      if (!timestamp) return "";
  
      const date = new Date(timestamp);
      const now = new Date();
  
      const isToday =
        date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear();
  
      if (isToday) {
        if (date.getHours() >= 12) {
          const hours = date.getHours() % 12 || 12;
          const minutes = String(date.getMinutes()).padStart(2, "0");
          const ampm = date.getHours() >= 12 ? "PM" : "AM";
          return `${hours}:${minutes} ${ampm}`;
        }
      } else {
        const day = date.getDate();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const year = date.getFullYear();
        return `${day} ${monthNames[date.getMonth()]} ${year}`;
      }
  
      return "";
    };
  
    return (
      <div className="flex flex-col flex-grow overflow-y-auto p-4 bg-white">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} mb-2`}>
            <div
              className={`p-3 rounded-lg max-w-xs ${
                msg.role === "user"
                  ? "bg-orange-500 text-white self-end"
                  : "bg-gray-200 text-black self-start"
              }`}
            >
              <p>{msg.message}</p>
              {msg.timestamp && (
                <p className="text-xs text-gray-600 mt-1 text-right">
                  {formatTimestamp(msg.timestamp)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  