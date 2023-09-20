import { useChatContext } from "../context/ChatContext"

export const Profile = () => {
    const { loggedUser, handleModalProfile, handleModalLogin } = useChatContext();

    if (loggedUser) {
        const { avatar, firstName, lastName } = loggedUser;
        return (
            <div className='w-full h-14 py-2 my-auto text-center border border-black bg-black absolute bottom-0'>
                <div><img src={avatar}/></div>
                <div>{firstName} {lastName}</div>
                <div
                    className="w-5 h-5 absolute right-5 bottom-5 cursor-pointer"
                    onClick={handleModalProfile}
                >
                    <img src='/arrow_down.svg' alt="arrow_down" />
                </div>
            </div>
        );
    }

    return (
        <div className='w-full h-14 py-2 my-auto text-center border border-black bg-black absolute bottom-0'>
            <button
                onClick={handleModalLogin}
            >
                Profile
            </button>
            <div
                className="w-5 h-5 absolute right-5 bottom-5 cursor-pointer"
                onClick={handleModalProfile}
            >
                <img src='/arrow_down.svg' alt="arrow_down" />
            </div>
        </div>
    )
}