import AllRecipes from '../features/allRecipes/allRecipes';
import FavoriteRecipes from '../features/favouriteRecipes/FavouriteRecipes';
import SearchTerm from '../features/searchTerm/SearchTerm';
import { getFilteredRecipes } from '../helpers/getFiltered'
import './App.css';

function App({ state, dispatch }) {

  const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
  const visibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);

  return (
    <main>
      <section>
        <SearchTerm
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes
          favoriteRecipes={visibleFavoriteRecipes}
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section></section>
      <section>
        <h2>All Recipes</h2>
        <AllRecipes
          allRecipes={visibleAllRecipes}
          dispatch={dispatch}
        />
      </section>
    </main>
  );
}

export default App;
