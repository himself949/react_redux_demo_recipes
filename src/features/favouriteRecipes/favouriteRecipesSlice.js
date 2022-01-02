import { createSlice } from '@reduxjs/toolkit'
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

const options = {
    name: 'favouriteRecipes',
    initialState: [],
    reducers: {
        addRecipe: (state, action) => { state.push({ ...action.payload }) },
        removeRecipe: (state, action) => { return state.filter(recipe => recipe.id !== action.payload.id) }
    }
}
export const favouriteRecipesSlice = createSlice(options)

export const selectFavouriteRecipes = (state) => state.favouriteRecipes;

export const selectFilteredFavouriteRecipes = (state) => {
    const favouriteRecipes = selectFavouriteRecipes(state);
    const searchTerm = selectSearchTerm(state);

    return favouriteRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export const { addRecipe, removeRecipe } = favouriteRecipesSlice.actions
export default favouriteRecipesSlice.reducer