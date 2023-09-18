import { useCallback, useState } from "react"
import { useChatContext } from "../context/ChatContext";
import { loginUser } from "../api/api";

export const Authorization = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');

    const {handleModalLogin} = useChatContext();

    const handleFormLogin = useCallback( async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       const data = await loginUser(email, password);
       localStorage.setItem('loggedInUser', JSON.stringify(data));
       handleModalLogin();
       window.location.href='/';
    }, [email, handleModalLogin, password]);

    return (
        <div className="w-1/2 bg-black tex-white z-99 absolute left-40 top-20 p-8 rounded-lg">
            <form 
                className="flex flex-col gap-6"
                onSubmit={handleFormLogin}
            >
                 <div className="absolute top-0 right-0 w-4 h-4 bg-input rounded-full transform-translate hover:rotate-180 cursor-pointer"
                    onClick={handleModalLogin}
                >
                    <img src="/close.svg" alt="close" />
                </div>
                <h4 className="uppercase font-semibold">Log in</h4>
                <input
                    placeholder='Email'
                    className="rounded h-10 p-4 bg-input"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                        className="bg-blue-400 rounded p-1 w-16 hover:bg-blue-500 font-semibold"
                    >
                        Log in
                    </button>
                </div>

            </form>
        </div>
    )
}