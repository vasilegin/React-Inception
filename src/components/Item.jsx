import React from 'react';
import MyButton from './UI/button/MyButton';

const Item = ({title, descriptions, button_name, props}) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>
                    {title}
                </strong>
                <div className='post__desc'>
                    {descriptions}
                </div>
                <div>
                    <MyButton>{button_name}</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Item;