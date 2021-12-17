import React from 'react';

const FavouriteButton = ({ children, onClickHandler, icon }) => {
    return (
        <button className="favorite-button" onClick={onClickHandler}>
            <img className="heart-icon" alt="" src={icon} />
            Add to Favorites
        </button>
    );
};

export default FavouriteButton;