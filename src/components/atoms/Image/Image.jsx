import React from 'react';

const Image = (
    {
        url = 'https://via.placeholder.com/1000x1000',
        alt = '',
        className = '',
        width = '50px',
        height = '50px',
        style
    }
) => {
    return (
        <img
            src={url}
            alt={alt}
            width={width}
            height={height}
            className={className}
            style={style}
        />
    );
};

export default Image;