import './App.css';
import { Channels } from './components/Channels';
import { Members } from './components/Members';
import {Messages} from './components/Messages'
import { ModalProfile } from './components/ModalProfile';
import { useChatContext } from './context/ChatContext';

function App() {

  const {onChannel, modalProfile} = useChatContext();

  return (
    <div className='max-h-screen grid grid-cols-4 md:grid-cols-12 gap-4 grid-rows-1 h-screen bg-main'>
      {!onChannel
      ? <Channels />
      : <Members />}
      <hr className='w-full absolute z-10 top-12 left-0 border-black h-1 blur-xs'></hr>
      <Messages />
      {modalProfile && <ModalProfile />}
      
    </div>
  )
}

export default App
