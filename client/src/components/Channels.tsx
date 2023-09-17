import { useChatContext } from "../context/ChatContext";
import { Profile } from "./Profile";

export const Channels = () => {
    const { handleChangeChannel, channels } = useChatContext();

    return (
        <div className='hidden md:block md:col-start-1 md:col-end-3 bg-left text-white py-3 relative'>
            <div className='flex justify-between'>
                <h2 className='mx-6 font-bold'>
                    Channels
                </h2>
                <div
                    className="bg-input mx-3 rounded p-0.5 cursor-pointer"
                    onClick={() => { }}
                >
                    <img src="/add.svg" alt="add" className="" />
                </div>

            </div>
            <div className='md:my-9 mx-auto text-center relative'>
                <input
                    className="w-4/5 rounded h-8 bg-input mx-1 pl-10"
                    placeholder="Search"
                />
                <img src="/search.svg" className="absolute top-1 left-8 " />

            </div>
            <div className='md:my-7 mx-auto text-center'>
                <ul>
                    {channels.map(channel => {
                        const firstLetter = channel.title[0];
                        const secondWord = channel.title.split(' ')[1];
                        const secondLetter = secondWord !== undefined ? secondWord[0] : '';
                        return (

                            <li className="flex" key={channel._id} onClick={() => handleChangeChannel(channel)}>
                                <div className="mx-6 w-10 h-10 bg-input rounded flex justify-center items-center">{firstLetter} {!!secondLetter && secondLetter}</div>
                                <p className="text-center my-auto">{channel.title}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
           <Profile />
        </div>

    )
}