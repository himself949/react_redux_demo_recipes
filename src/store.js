import { configureStore } from '@reduxjs/toolkit';
import { allRecipesReducer } from './features/allRecipes/allRecipesSlice';
import { searchTermReducer } from './features/searchTerm/searchTermSlice';
import favouriteRecipesReducer from './features/favouriteRecipes/favouriteRecipesSlice';

const store = configureStore({
    reducer: {
        favouriteRecipes: favouriteRecipesReducer,
        searchTerm: searchTermReducer,
        allRecipes: allRecipesReducer
    }
})

export default store