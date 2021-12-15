import React, { useEffect } from 'react';
import Recipe from '../../components/Recipe,';
import { loadData } from './allRecipesSlice';


const AllRecipes = ({ allRecipes, dispatch }) => {

    const onFirstRender = () => {
        dispatch(loadData());
    }
    useEffect(onFirstRender, [])

    return (
        <div className="recipes-container">


            {allRecipes.map((recipe) => (
                <Recipe recipe={recipe} key={recipe.id}>
                    {/*<FavoriteButton
                        onClickHandler={() => onAddRecipeHandler(recipe)}
                        icon={favoriteIconURL}
                    >
                        Add to Favorites
                    </FavoriteButton>*/}
                </Recipe>
            ))}

        </div>
    );
};

export default AllRecipes;

/*

*/