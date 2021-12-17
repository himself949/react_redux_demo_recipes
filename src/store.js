import { createStore, combineReducers } from 'redux';
import { allRecipesReducer } from './features/allRecipes/allRecipesSlice';
import { searchTermReducer } from './features/searchTerm/searchTermSlice';
import { favoriteRecipesReducer } from './features/favouriteRecipes/favouriteRecipesSlice';

export const store = createStore(combineReducers({
    allRecipes: allRecipesReducer,
    searchTerm: searchTermReducer,
    favoriteRecipes: favoriteRecipesReducer,
}));