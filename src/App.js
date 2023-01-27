
import { ChatEngine } from 'react-chat-engine';


import ChatFeed from './components/ChatFeed.jsx';

import LoginForm from './components/LoginForm.jsx';

import './App.css';

const App= () => {

    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
        height="100vh"
        projectID="58ef8182-eec5-4198-aede-30690fd06aac"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
        />
    );
};

export default App;