import React from 'react';
import './pic.css';

const Pic = ({ id, name, isChannel, isChip }) => {
    const getInitial = () => {
        let initialLetter = name.charAt(0);
        return initialLetter.toUpperCase();
    };

    let colors = [
        '#d43d2a',
        '#ed8937',
        '#d5b758',
        '#9cb27a',
        '#62ae9d',
        '#2aa9be',
    ];

    let colorNumber;

    const getColor = () => {
        if (id === 0) {
            return (colorNumber = 0);
        } else if (id >= colors.length) {
            return (colorNumber = Math.floor(id % colors.length));
        } else if (id < colors.length) {
            return (colorNumber = Math.floor(colors.length % id));
        }
    };

    getColor();

    return (
        <div className="pic-container">
            <div
                className={isChip ? 'chip-pic' : 'profile-pic'}
                style={{
                    backgroundColor: colors[colorNumber],
                }}
            >
                {getInitial()}
            </div>
            {isChannel ? (
                <div className="channel-pic-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default Pic;
