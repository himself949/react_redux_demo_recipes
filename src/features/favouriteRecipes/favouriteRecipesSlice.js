import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

const initialState = [];
export const favouriteRecipesReducer = (favouriteRecipes = initialState, action) => {
    switch (action.type) {
        case 'favouriteRecipes/addRecipe':
            return [...favouriteRecipes, action.payload]
        case 'favouriteRecipes/removeRecipe':
            return favouriteRecipes.filter(recipe => recipe.id !== action.payload.id)
        default:
            return favouriteRecipes;
    }
}

export function addRecipe(recipe) {
    return {
        type: 'favouriteRecipes/addRecipe',
        payload: recipe
    }
}

export function removeRecipe(recipe) {
    return {
        type: 'favouriteRecipes/removeRecipe',
        payload: recipe
    }
}

export const selectFavouriteRecipes = (state) => state.favouriteRecipes;

export const selectFilteredFavouriteRecipes = (state) => {
    const favouriteRecipes = selectFavouriteRecipes(state);
    const searchTerm = selectSearchTerm(state);

    return favouriteRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};