import React from 'react';

const Footer = () => {
    return (
        <footer className="fixed bottom-4 left-0 w-full text-center text-xs text-gray-600">
            &copy; {new Date().getFullYear()} designed & developed by <a className="underline hover:text-gray-300 transition-colors" href="https://twitter.com/mofodox">Khairul Akmal</a>.
        </footer>
    );
};

export default Footer;
