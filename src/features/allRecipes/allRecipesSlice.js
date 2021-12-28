import allRecipesData from '../../data'
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
    switch (action.type) {
        case 'allRecipes/loadData':
            return action.payload;
        case 'favouriteRecipes/addRecipe':
            return allRecipes.filter(recipe => recipe.id !== action.payload.id);
        case 'favouriteRecipes/removeRecipe':
            return [...allRecipes, action.payload]
        default:
            return allRecipes;
    }
}

export const loadData = () => {
    return {
        type: 'allRecipes/loadData',
        payload: allRecipesData
    }
}

export const selectAllRecipes = (state) => {
    return state.allRecipes
}

export const selectFilteredAllRecipes = (state) => {
    const allRecipes = selectAllRecipes(state)
    const searchTerm = selectSearchTerm(state)
    return allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
}
