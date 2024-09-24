import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CatCard from './components/CatCard';
import Signup from './components/Signup';
import Login from './components/Login';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isSignup, setIsSignup] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    setIsSignup(false);
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        {!isLoggedIn ? (
          isSignup ? (
            <Signup onSignup={handleSignup} />
          ) : (
            <Login onLogin={handleLogin} />
          )
        ) : (
          <div className='flex flex-col'>
            <CatCard />
            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}
        {!isLoggedIn ? (
          <p>
            Click here to <a onClick={() => setIsSignup(!isSignup)}>register</a>
          </p>
        ) : <></>}
      </main>
      <Footer />
    </div>
  );
};

export default App;
