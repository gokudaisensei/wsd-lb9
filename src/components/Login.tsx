import React, { useState } from 'react';

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (storedUsername === username && storedPassword === password) {
            onLogin();
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-lg">Login</h2>
            {error && <p className="mb-2 text-red-500">{error}</p>}
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full p-2 mb-4 border"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 mb-4 border"
                required
            />
            <button
                type="submit"
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            >
                Login
            </button>
        </form>
    );
};

export default Login;
