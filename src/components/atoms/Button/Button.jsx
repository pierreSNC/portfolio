import React from 'react';
import './Button.css'

const Button = (
    {
        content = '',
        className = 'btn',
        rounded = false,
        background  = 'primary',
        border = 'none'
    }
) => {

    const roundedProps = rounded ? 'btn-rounded' : '';
    switch (background) {
        case 'primary':
            background = 'bg-primary'
            break;
        case 'none':
            background = 'bg-none'
            break;
    }
    switch (border) {
        case 'none':
            border = 'border-none'
            break;
        case 'primary':
            border = 'border-primary'
            break;
    }

    return (
        <button className={`${roundedProps} ${className} ${background} ${border}`}>
            {content}
        </button>
    );
};

export default Button;
