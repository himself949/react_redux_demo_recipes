import React, { useEffect } from 'react';
import FavouriteButton from '../../components/FavouriteButton';
import Recipe from '../../components/Recipe,';
import { loadData } from './allRecipesSlice';
import { addRecipe } from '../favouriteRecipes/favouriteRecipesSlice';

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

const AllRecipes = ({ allRecipes, dispatch }) => {

    const onFirstRender = () => {
        dispatch(loadData());
    }
    useEffect(onFirstRender, [])

    const onAddRecipeHandler = (recipe) => {
        dispatch(addRecipe(recipe));
    };

    return (
        <div className="recipes-container">
            {allRecipes.map((recipe) => (
                <Recipe recipe={recipe} key={recipe.id}>
                    <FavouriteButton
                        onClickHandler={() => onAddRecipeHandler(recipe)}
                        icon={favoriteIconURL}
                        text="Add to Favorites"
                    />
                </Recipe>
            ))}
        </div>
    );
};

export default AllRecipes;