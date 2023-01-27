
import { ChatEngine } from 'react-chat-engine';


import ChatFeed from './components/ChatFeed.jsx';

import LoginForm from './components/LoginForm.jsx';

import './App.css';

const App= () => {

    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
        height="100vh"
        projectID=" 6d0be81d-bf42-4ea7-b1b5-57bd849ebbdd"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
        />
    );
};

export default App;