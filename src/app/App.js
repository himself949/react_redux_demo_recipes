import AllRecipes from '../features/allRecipes/allRecipes';
import { getFilteredRecipes } from '../helpers/getFiltered'
import './App.css';

function App({ state, dispatch }) {


  const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);

  return (
    <main>
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

/*

          
*/