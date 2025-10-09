import React, { useEffect, useRef } from 'react';

const FixedRedCircle = () => {
    const circleRef = useRef(null);

    useEffect(() => {
        // Просто для проверки — лог, что компонент смонтировался
        console.log('FixedRedCircle mounted');
    }, []);

    return (
        <div
            ref={circleRef}
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                width: '150px',
                height: '150px',
                backgroundColor: 'rgba(255, 0, 0, 0.7)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
                pointerEvents: 'none',
            }}
        />
    );
};

export default FixedRedCircle;