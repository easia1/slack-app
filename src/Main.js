import React from 'react';

const Main = ({ logoutFunction }) => {
    return (
        <div>
            <button onClick={logoutFunction}>Logout</button>
        </div>
    );
};

export default Main;
