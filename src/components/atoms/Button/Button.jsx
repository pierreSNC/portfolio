import React from 'react';
import './Button.css';

const Button = ({
                    content = '',
                    className = 'btn',
                    rounded = false,
                    background = 'primary',
                    border = 'none',
                    icon = false,
                    iconContent = '',
                    onClick,
                    type
                }) => {
    const roundedClass = rounded ? 'btn-rounded' : '';
    let backgroundClass = '';
    let borderClass = '';

    switch (background) {
        case 'primary':
            backgroundClass = 'bg-primary';
            break;
        case 'none':
            backgroundClass = 'bg-none';
            break;
        default:
            backgroundClass = background;
    }

    switch (border) {
        case 'none':
            borderClass = 'border-none';
            break;
        case 'primary':
            borderClass = 'border-primary';
            break;
        default:
            borderClass = border;
    }

    return (
        <button className={`${roundedClass} ${className} ${backgroundClass} ${borderClass}`} onClick={onClick} type={type}>
             <span>{content}</span>
             <span>{icon && iconContent}</span>
        </button>
    );
};

export default Button;
