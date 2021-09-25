import React from 'react';
import './toast.css';

const Toast = ({ className, text }) => {
    return <div className={className}>{text}</div>;
};

export default Toast;
