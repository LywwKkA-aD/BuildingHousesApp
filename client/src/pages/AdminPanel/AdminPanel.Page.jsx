import React, { useState } from 'react';
import { Alert } from "@material-tailwind/react";
import LoginComponent from './components/Login/Login.Component';  // Assuming the Login component is in the same directory
import HouseListComponent from './components/HouseList/HouseList.Component';

const AdminPanel = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [messageType, setMessageType] = useState('');  // This will be either 'success', 'error' or ''
    const [messageText, setMessageText] = useState('');  // The actual message text

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setMessageType('success');
        setMessageText('Successfully logged in!');
        setTimeout(() => setMessageType(''), 3000);
    }

    const handleLoginError = () => {
        setMessageType('error');
        setMessageText('Invalid credentials. Try again.');
        setTimeout(() => setMessageType(''), 3000);
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            {isLoggedIn ? (
                // Render the main content of your admin panel here
                <div>
                    <HouseListComponent />
                </div>
            ) : (
                <LoginComponent onLoginSuccess={handleLoginSuccess} onLoginError={handleLoginError} />
            )}
            {messageType === 'success' && <Alert color="green" className="mx-auto max-w-xs fixed top-5 left-1/2 transform -translate-x-1/2 inline-block hover:scale-105 transition-all duration-500">{messageText}</Alert>}
            {messageType === 'error' && <Alert color="red" className="mx-auto max-w-xs fixed top-5 left-1/2 transform -translate-x-1/2 inline-block hover:scale-105 transition-all duration-500">{messageText}</Alert>}
        </div>
    );
}

export default AdminPanel;
