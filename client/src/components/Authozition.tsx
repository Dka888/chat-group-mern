export const Authorization = () => {
    return (
        <div className="w-1/2 bg-black tex-white z-99 absolute left-40 top-20 p-8 rounded-lg">
            <form className="flex flex-col gap-6">
                <h4 className="uppercase font-semibold">Log in</h4>
                <input
                    placeholder='Email'
                    className="rounded h-10 p-4 bg-input"
                    type="text"
                ></input>
                <input
                    placeholder="Password"
                    className="rounded h-10 p-4 bg-input"
                    type="password"
                ></input>
                <div className="grid justify-items-end">
                    <button className="bg-blue-400 rounded p-1 w-16 hover:bg-blue-500 font-semibold">
                        Log in
                    </button>
                </div>

            </form>
        </div>
    )
}