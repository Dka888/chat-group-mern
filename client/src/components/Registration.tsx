import { useCallback, useState } from "react"
import { useChatContext } from "../context/ChatContext";
import { registerUser } from "../api/api";

export const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [avatar, setAvatar] = useState('');

    const {handleModalRegister} = useChatContext();

    const handleFormLogin = useCallback( async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {email, password, firstName, lastName, avatar}
       const data = await registerUser(user);
        if (data) {
           localStorage.setItem('loggedInUser', JSON.stringify(data));
           handleModalRegister();
        }

    }, [avatar, email, firstName, handleModalRegister, lastName, password]);

    return (
        <div className="w-1/2 bg-black tex-white z-99 absolute left-40 top-1 p-8 rounded-lg">
            <form 
                className="flex flex-col gap-6"
                onSubmit={handleFormLogin}
            >
                <div className="absolute top-0 right-0 w-4 h-4 bg-input rounded-full hover:transform-translate hover:rotate-180 cursor-pointer"
                    onClick={handleModalRegister}
                >
                    <img src="/close.svg" alt="close"/>
                </div>
                <h4 className="uppercase font-semibold">Restration</h4>
                <input
                    placeholder='Email'
                    className="rounded h-10 p-4 bg-input"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                ></input>
                <input
                    placeholder='Name'
                    className="rounded h-10 p-4 bg-input"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                ></input>
                <input
                    placeholder="Last Name"
                    className="rounded h-10 p-4 bg-input"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                ></input>
                <input
                    placeholder='Avatar'
                    className="rounded h-10 p-4 bg-input"
                    type="text"
                    onChange={(e) => setAvatar(e.target.value)}
                    value={avatar}
                ></input>
                <input
                    placeholder="Password"
                    className="rounded h-10 p-4 bg-input"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                ></input>
                <div className="grid justify-items-end">
                    <button 
                        className="bg-blue-400 rounded p-1 w-20 hover:bg-blue-500 font-semibold"
                    >
                        Register
                    </button>
                </div>

            </form>
        </div>
    )
}