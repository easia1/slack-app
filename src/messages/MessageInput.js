import React from 'react';
import Button from '../components/button/Button';

const MessageInput = () => {
    return (
        <form className="message-input-container">
            <label className="input-container">
                <input
                    type="text-area"
                    name="message-input"
                    id="message-input"
                    placeholder="Type your message here..."
                />
            </label>
            <button
                type="submit"
                className="send-button"
                onClick={(e) => e.preventDefault()}
            >
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                </svg>
            </button>
        </form>
    );
};

export default MessageInput;
