import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useEffect } from 'react';

export const Error = ({ message }) => {

    const [error, setError] = useState();
    const [range, setRange] = useState();

    const alterMessage = () => {
        const splittedMessage = message.split('(');
        setError(splittedMessage[0]);
        setRange(splittedMessage[1].slice(0, -1));
    };
    
    useEffect(() => {
        alterMessage();
    }, []);


    return (
        <>
            <div className='max-w-7xl mx-auto animate__animated animate__shakeX'>
                <div className='relative'>
                    <div className='absolute -inset-1 bg-gradient-to-br from-red-600 to-pink-600 rounded-lg blur opacity-80'></div>
                    <div className='relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6'>
                        <div className="space-y-2">
                            <p className='text-slate-800'>{error}</p>
                            <span className='block text-indigo-400'>{range}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Error.propTypes = {
    message: propTypes.string.isRequired,
};
