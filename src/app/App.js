import AllRecipes from '../features/allRecipes/allRecipes';
import FavoriteRecipes from '../features/favouriteRecipes/FavouriteRecipes';
import SearchTerm from '../features/searchTerm/SearchTerm';

import './App.css';

function App() {

  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        <AllRecipes />
      </section>
    </main>
  );
}

export default App;