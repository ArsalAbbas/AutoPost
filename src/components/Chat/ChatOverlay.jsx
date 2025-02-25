import ChatActions from "./ChatActions/ChatActions";
import ChatInputBox from "./ChatInputBox/ChatInputBox";
import ChatHistory from "./ChatHistory/ChatHistory";
import { useState } from "react";
import { BotMessageSquare } from "lucide-react";


const DEFAULT_CHAT_HISTORY=[
    {
        role:'bot',
        message:'Hi, tell me what request you want me to create i will do it for you'
    }
  ]

export default function ChatOverlay(){
      const [isChatOpen, setIsChatOpen]=useState(false)
      const [chatHistory,setChatHistory]=useState(DEFAULT_CHAT_HISTORY)


      const onCloseChatPress=()=>{
        setIsChatOpen(false)
      }

      const onRefresh=()=>{
        clearChat()
      }

      const onChatButtonClick=()=>{
        setIsChatOpen(true)
      }

      const clearChat=()=>{
        setChatHistory(DEFAULT_CHAT_HISTORY)        
      }


      //TODO: remove bot ka response
      const onMessageSend=(message)=>{
        setChatHistory(
            prev=>[...prev,{
                role:'user',
                message,
                timestamp:Date.now()
            },{
                role:'bot',
                message:'Haan bhai samajh gaya',
                timestamp:Date.now()
            }]
        )
      }

      if (!isChatOpen) {
        return (
          <button
            onClick={onChatButtonClick}
            className="fixed bottom-4 right-4 bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 transition"
          >
        <BotMessageSquare />
          </button>
        );
      }
      
    
    return (
    <ChatActions onClose={onCloseChatPress} onRefresh={onRefresh}>
        <ChatHistory chatHistory={chatHistory}/>
        <ChatInputBox onSend={onMessageSend}/>
    </ChatActions>
    )
}