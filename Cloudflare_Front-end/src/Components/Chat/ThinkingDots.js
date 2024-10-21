import React from 'react';

const ThinkingDots = () => {
    return (
        <div className="flex items-center">
            <span>Thinking</span>
            <span className="ml-1 after:content-[''] after:inline-block after:animate-dots"></span>
        </div>
    );
};

export default ThinkingDots;