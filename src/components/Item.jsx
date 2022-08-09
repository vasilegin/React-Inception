import React from 'react';
import MyButton from './UI/button/MyButton';

const Item = ({title, descriptions, button_name, props}) => {
    return (
        <div>
            <h4>{title}</h4>
            <div>{descriptions}</div>
            <MyButton>{button_name}</MyButton>
        </div>
    );
};

export default Item;