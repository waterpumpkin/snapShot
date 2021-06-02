import React from 'react';

const Images = ({ url, title }) => (
    <li>
        <img src={url} alt={title} />
    </li>
);

export default Images;