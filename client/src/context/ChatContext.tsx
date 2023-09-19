import { ReactNode, createContext, useState, useContext, useEffect, useCallback, useMemo } from "react";
import { Channel } from "../types/Channel";
import { User } from "../types/User";
import { getChannels, getMessages, getUsers } from "../api/api";
import { Message } from "../types/Message";

interface ChatContextInterface {
    onChannel: boolean,
    handleOnChannel: () => void,
    handleChangeChannel: (channel: Channel) => void,
    currentChannel: Channel | null,
    users: User[] | [],
    messages: Message[] | [],
    channels: Channel[] | []
    loggedUser: User | null,
    modalProfile: boolean,
    handleModalProfile: () => void,
    handleModalLogin: () => void,
    handleModalRegister: () => void,
    modalLogin: boolean,
    modalRegister: boolean,
    handleModalChannel: () => void,
    modalChannel: boolean,
    tempMessage: Message | null,
    setTempMessage: (tempMessage: Message | null) => void,
    searchingChannel: Channel[],
    query: string,
    setQuery: (query: string) => void,
}

export const ChatContext = createContext<ChatContextInterface>({
    onChannel: false,
    handleOnChannel: () => { },
    handleChangeChannel: () => { },
    currentChannel: null,
    users: [],
    messages: [],
    channels: [],
    loggedUser: null,
    modalProfile: false,
    handleModalProfile: () => {},
    handleModalLogin: () => { },
    handleModalRegister: () => {},
    modalLogin: false,
    modalRegister: false,
    handleModalChannel: () => {},
    modalChannel: false,
    tempMessage: null,
    setTempMessage: () => {},
    searchingChannel: [],
    query: '',
    setQuery: () => {},
});

export const ChatContextProvider = ({ children }: { children: ReactNode }) => {
    const [onChannel, setOnChannel] = useState(false);
    const [currentChannel, setCurrentChannel] = useState<Channel | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [channels, setChannels] = useState<Channel[]>([]);
    const [loggedUser, setLoggedUser] = useState(null);
    const [modalProfile, setModalProfile] = useState(false);
    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);
    const [modalChannel, setModalChannel] = useState(false);
    const [tempMessage, setTempMessage] = useState<Message | null>(null);
    const [query, setQuery] = useState('');

    //Handle callback functions:
    const handleModalProfile = useCallback(() => {
        if (!modalLogin && !modalRegister && !modalChannel) {
        setModalProfile(!modalProfile);
        }
    }, [modalLogin, modalRegister, modalProfile, modalChannel]);

    const handleChangeChannel = useCallback((channel: Channel) => {
        if (!modalLogin && !modalRegister && !modalChannel) {
            handleOnChannel();
            setCurrentChannel(channel);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [channels, modalLogin, modalChannel])

    const handleOnChannel = useCallback(() => {
        if (!modalLogin && !modalRegister && !modalChannel) {
            setOnChannel(!onChannel);
        }
    }, [modalLogin, modalRegister, onChannel, modalChannel]);

    const handleModalLogin = useCallback(() => {
        setModalLogin(!modalLogin);
        setModalProfile(false);
    }, [modalLogin]);

    const handleModalChannel = useCallback(() => {
        setModalChannel(!modalChannel)
    }, [modalChannel])

    const handleModalRegister = useCallback(() => {
        setModalRegister(!modalRegister)
        setModalProfile(false);
    },[modalRegister]);


    // useEffects part:   
    useEffect(() => {
        const loadingData = async () => {
            const data = await getChannels();
            setChannels(data);
        };
        loadingData();
    }, []);

    useEffect(() => {
        const loadingData = async () => {
            const response = await getMessages();
            setMessages(response)
        };
        loadingData();
    }, [messages]);

    useEffect(() => {
        const loadingData = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        loadingData();
    }, []);

    useEffect(() => {
        const localStr = localStorage.getItem('loggedInUser')
        const loggedInUser = localStr ? JSON.parse(localStr) : null;
        setLoggedUser(loggedInUser);
    }, []);

// useMemo
    const searchingChannel = useMemo(() => {
        let newChannels = channels;
        const trimmedQuery = query.trim().toUpperCase();
        if(query) {
            newChannels = newChannels.filter(channel => channel.title.toUpperCase().includes(trimmedQuery))
        }
        return newChannels
    }, [channels, query]);

    return (
        <ChatContext.Provider value={{
            onChannel,
            handleOnChannel,
            handleChangeChannel,
            currentChannel,
            users,
            messages,
            channels,
            loggedUser,
            modalProfile,
            handleModalProfile,
            handleModalLogin,
            modalLogin,
            handleModalRegister,
            modalRegister,
            handleModalChannel,
            modalChannel,
            tempMessage,
            setTempMessage,
            searchingChannel,
            query,
            setQuery
        }}>
            {children}
        </ChatContext.Provider>)
}

// eslint-disable-next-line react-refresh/only-export-components
export const useChatContext = () => useContext(ChatContext);