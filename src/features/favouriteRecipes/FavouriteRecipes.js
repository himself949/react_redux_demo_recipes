import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FavouriteButton from '../../components/FavouriteButton';
import Recipe from '../../components/Recipe,';
import { removeRecipe, selectFilteredFavouriteRecipes } from './favouriteRecipesSlice'

const unfavouriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'

const FavoriteRecipes = () => {

    const favouriteRecipes = useSelector(selectFilteredFavouriteRecipes);
    const dispatch = useDispatch();

    const onRemoveRecipeHandler = (recipe) => {
        dispatch(removeRecipe(recipe));
    };

    return (
        <div className="recipes-container">
            {favouriteRecipes.map((recipe) => (
                <Recipe recipe={recipe} key={recipe.id}>
                    <FavouriteButton
                        onClickHandler={() => onRemoveRecipeHandler(recipe)}
                        icon={unfavouriteIconUrl}
                        text="Remove Favourite"
                    />
                </Recipe>
            ))}
        </div>
    );
};

export default FavoriteRecipes;