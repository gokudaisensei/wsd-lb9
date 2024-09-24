import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="p-4 text-white bg-red-500 shadow-md">
            <div className="container flex items-center justify-between mx-auto">
                <h1 className="text-lg font-semibold">Cat Gallery</h1>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="px-3 py-2 rounded hover:bg-red-600">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 rounded hover:bg-red-600">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 rounded hover:bg-red-600">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
