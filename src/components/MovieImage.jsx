import React from 'react';
import propTypes from 'prop-types';

export const MovieImage = ({source, alt, onClick}) => {
    return (
        <aside className="col-start-1 col-span-3">
            <img className="h-96 rounded-tl-lg rounded-bl-lg hover:cursor-pointer"
                src={source}
                alt={alt}
                onClick={onClick}
            />
        </aside>
    );
};

MovieImage.propTypes = {
    source: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
};
