import { useState } from "react";
import { useChatContext } from "../context/ChatContext";
import { createMessage } from "../api/api";

export const SendingText = () => {
    const [message, setMessage] = useState('');
    const {loggedUser, currentChannel, setTempMessage} = useChatContext();

    const handleSubmitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(loggedUser && currentChannel) {
          const newMessage = {
            content: message, 
            userId: loggedUser._id, 
            channelId: currentChannel._id
        }
           await createMessage(newMessage);
           const date = new Date().getDate();
           const tempMessage = {
            ...newMessage,
           _id: '',
           created: String(date)
          }

           setTempMessage(tempMessage)
           setMessage('')
        }
        
    }
    return (
        <div className="absolute bottom-20 md:bottom-10 w-3/4">
            <form 
                onSubmit={handleSubmitMessage}
            >
                <input
                    className='m-12 md:mb-2 w-full rounded-lg bg-input h-12 px-5'
                    type='text'
                    onChange={(e) => setMessage(e.target.value)}
                ></input>
                <button className="absolute -right-7 top-14 h-8 cursor-pointer">
                    <img src="/send.svg" alt="send"  />
                </button>
            </form>
        </div>
    )
}