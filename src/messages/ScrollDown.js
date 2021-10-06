import React, { useRef, useEffect } from 'react';

const ScrollDown = () => {
    const elementRef = useRef();

    useEffect(() => {
        elementRef.current.scrollIntoView();
    });

    return <div ref={elementRef}></div>;
};

export default ScrollDown;
