import React from 'react';
import FavouriteButton from '../../components/FavouriteButton';
import Recipe from '../../components/Recipe,';
import { removeRecipe } from './favouriteRecipesSlice'

const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'

const FavoriteRecipes = ({ favoriteRecipes, dispatch }) => {

    const onRemoveRecipeHandler = (recipe) => {
        dispatch(removeRecipe(recipe));
    };

    return (
        <div className="recipes-container">
            {favoriteRecipes.map((recipe) => (
                <Recipe recipe={recipe} key={recipe.id}>
                    <FavouriteButton
                        onClickHandler={() => onRemoveRecipeHandler(recipe)}
                        icon={unfavoriteIconUrl}
                        text="Remove Favourite"
                    />
                </Recipe>
            ))}
        </div>
    );
};

export default FavoriteRecipes;