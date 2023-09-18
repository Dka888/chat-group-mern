import { useChatContext } from "../context/ChatContext"

export const ModalProfile = () => {
    const { loggedUser, handleModalLogin, handleModalRegister } = useChatContext();
    const handleLogOut = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    if (loggedUser) {
        return (
            <div className="h-28 w-36 absolute bottom-12 left-20 bg-main rounded flex flex-col justify-center px-2">
                <div className="p-1 rounded-lg hover:bg-input my-0.5 text-white flex gap-2 cursor-pointer">
                    <img src="/account_circle.svg" alt="account" />My Profile</div>
                <div className="p-1 rounded-lg hover:bg-input my-0.5 text-white flex gap-2 cursor-pointer">
                    <img src="/tweeter.svg" alt="tweeter" />Tweeter</div>
                    <hr className="w-full "/>
                <div
                    className="p-1 rounded-lg hover:bg-input my-0.5 text-red-600 flex gap-2 cursor-pointer"
                    onClick={handleLogOut}
                >
                    <img src="/logout.svg" alt="logout" />Log out</div>
            </div>
        )
    }
    return (
        <div className="h-20 w-36 absolute bottom-12 left-20 bg-main rounded flex flex-col justify-center px-2">
            <div className="p-1 rounded-lg hover:bg-input my-0.5 text-white flex gap-2 cursor-pointer"
                onClick={handleModalLogin}
            >
                <img src="/account_circle.svg" alt="account" />Log in</div>
            <div className="p-1 rounded-lg hover:bg-input my-0.5 text-white flex gap-2 cursor-pointer"
                onClick={handleModalRegister}
            >
                <img src="/tweeter.svg" alt="tweeter" />Sign up</div>
        </div>
    )
}