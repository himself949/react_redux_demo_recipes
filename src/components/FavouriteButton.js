import React from 'react';

const FavouriteButton = ({ onClickHandler, icon, text }) => {
    return (
        <button className="favorite-button" onClick={onClickHandler}>
            <img className="heart-icon" alt="" src={icon} />
            {text}
        </button>
    );
};

export default FavouriteButton;