import React from 'react';
import './Text.css';

const Text = ({
                  tag = 'div',
                  className = '',
                  content = '',
                  href = '',
              }) => {
    const Tag = tag;
    const tagProps = Tag === 'a' ? { href } : {};

    return (
        <Tag
            {...tagProps}
            className={`text ${className}`}
        >
            {content}
        </Tag>
    );
};

export default Text;
