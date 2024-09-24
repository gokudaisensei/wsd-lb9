import React, { useState } from 'react';

const Signup: React.FC<{ onSignup: () => void }> = ({ onSignup }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        onSignup()
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-lg">Signup</h2>
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
                Sign Up
            </button>
        </form>
    );
};

export default Signup;
