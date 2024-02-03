import React from 'react';

const Image = (
    {
        url = 'https://via.placeholder.com/100x100',
        alt = '',
        className = '',
        width = '50px',
        height = '50px'
    }
) => {
    return (
        <img
            src={url}
            alt={alt}
            width={width}
            height={height}
            className={className}
        />
    );
};

export default Image;