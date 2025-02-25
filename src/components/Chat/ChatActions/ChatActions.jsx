import { X, RotateCw, Bot } from "lucide-react";

export default function ChatActions({ onClose,onRefresh, children }) {
  return (
    <div className="fixed bottom-4 right-4 w-[600px] h-[800px] bg-white shadow-2xl rounded-lg flex flex-col">
      <div className="flex justify-between items-center p-3 bg-orange-500 text-white rounded-t-lg">
        <div className="flex flex-row gap-2">
            <Bot />
            <span className="font-semibold">AI Assist</span>
        </div>
        <div className="flex space-x-2">
          <button
            className="text-white-500 p-2 rounded-full hover:bg-orange-400 transition flex items-center justify-center"
            onClick={() => onRefresh()}
          >
            <RotateCw size={16} />
          </button>
          <button
            className="text-white-500 p-2 rounded-full hover:bg-orange-400 transition flex items-center justify-center"
            onClick={onClose}
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-grow overflow-y-auto p-3">{children}</div>
    </div>
  );
}
