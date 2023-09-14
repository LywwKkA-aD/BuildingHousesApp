import React, { useState } from 'react';
import { Button, Input } from "@material-tailwind/react";

const LoginComponent = ({ onLoginSuccess, onLoginError }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === 'V5f49weqw1f9qe56qw984') {
            onLoginSuccess();  // Notify the parent component of successful login
        } else {
            onLoginError();    // Notify the parent component of an error
        }
    }

    return (
        <div className="bg-white p-8 rounded shadow-md w-96">
            <h1 className="text-2xl mb-4 text-green-300">Login</h1>
            <div className='mb-4'>
                <Input
                    type="text"
                    color="green"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <Input
                    type="password"
                    color="green"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button
                color="green"
                className="mt-4"
                onClick={handleLogin}
            >
                Login
            </Button>
        </div>
    );
}

export default LoginComponent;
