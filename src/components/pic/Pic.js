import React from 'react';
import './pic.css';

const Pic = ({ id, name }) => {
    const getInitial = () => {
        let initialLetter = name.charAt(0);
        return initialLetter.toUpperCase();
    };

    console.log('pic', id, name);

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
        } else if (id > colors.length) {
            return (colorNumber = Math.floor(id % colors.length));
        } else if (id < colors.length) {
            return (colorNumber = Math.floor(colors.length % id));
        }
    };

    getColor();

    return (
        <div
            className="profile-pic"
            style={{
                backgroundColor: colors[colorNumber],
            }}
        >
            {getInitial()}
        </div>
    );
};

export default Pic;
