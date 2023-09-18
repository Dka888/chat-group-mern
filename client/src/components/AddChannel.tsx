import { useState, useCallback } from "react";

import { useChatContext } from "../context/ChatContext";
import { createChannel } from "../api/api";

export const AddChannel = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] =  useState('');

    const {handleModalChannel} = useChatContext();

    const submitFormChannel = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const upperTitle = title.toUpperCase();
        const channel = {title: upperTitle, description};
        createChannel(channel);
        setTimeout(() => window.location.href='/', 3000);
    }, [description, title]);

    return (
        <div className="w-1/2 bg-black tex-white z-99 absolute left-40 top-20 p-8 rounded-lg">
        <form 
            className="flex flex-col gap-6"
            onSubmit={submitFormChannel}
        >
             <div className="absolute top-0 right-0 w-4 h-4 bg-input rounded-full transform-translate hover:rotate-180 cursor-pointer"
                onClick={handleModalChannel}
            >
                <img src="/close.svg" alt="close" />
            </div>
            <h4 className="uppercase font-semibold">Create channel</h4>
            <input
                placeholder='Title'
                className="rounded h-10 p-4 bg-input uppercase"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            ></input>
            <textarea
                placeholder="Description"
                className="rounded h-20 px-4 py-1 bg-input"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            ></textarea>
            <div className="grid justify-items-end">
                <button 
                    className="bg-blue-400 rounded p-1 w-16 hover:bg-blue-500 font-semibold"
                >
                    Add
                </button>
            </div>

        </form>
    </div>
    )
}