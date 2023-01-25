
import { ChatEngine } from 'react-chat-engine';


import ChatFeed from './components/ChatFeed.jsx';

import LoginForm from './components/LoginForm.jsx';

import './App.css';

const App= () => {

    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
        height="100vh"
        projectID="3154d8be-b676-4739-a145-4dce4258c1a9"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
        />
    );
};

export default App;