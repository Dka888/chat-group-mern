import { useChatContext } from "../context/ChatContext";
import { AddChannel } from "./AddChannel";
import { Authorization } from "./Authozition";
import { Registration } from "./Registration";
import { SendingText } from "./SendingText";

export const Messages = () => {
    const { currentChannel, messages, users, modalLogin, modalRegister, modalChannel} = useChatContext();

    function getUserById (id: string) {
      return users.find(user => user._id === id) ?? null;
    }

    const channelMessages = currentChannel ? messages.filter(message => message.channelId === currentChannel._id) : [];
    const messagesWithUsers = channelMessages.map(message => ({
        ...message,
        userId: getUserById(message.userId),
      }));

    return (
        <div className='col-start-1 col-end-5 md:col-start-3 md:col-end-12 text-white py-2'>
            <header className='h-9 w-full relative z-1'>
                <h1 className="text-2xl font-bold m-auto text-center text-white uppercase">
                    {currentChannel?.title}
                </h1>
            </header>
            
            <ul className='m-12 relative h-2/3 overflow-y-hidden '>
                {modalLogin && <Authorization />}
                {modalRegister && <Registration />}
                {modalChannel && <AddChannel />}
               
                {messagesWithUsers.map(message => 
                    <li key={message._id} className={`flex gap-5 m-1.5 my-3 -translate-y-${messagesWithUsers.length}`}>
                    <div className="w-12 h-12 border rounded mr-5">
                        <img src={message.userId?.avatar} alt={message.userId?.lastName}/></div>
                    <div>
                        <p className=""><span className="mr-9">{message.userId?.firstName} {message.userId?.lastName}</span>{message.created}</p>
                        <p>{message.content}</p> 
                    </div>
                </li>)}
            </ul>
            <SendingText />
        </div>
    )
}