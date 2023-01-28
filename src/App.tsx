import { useCallback } from "react";
import "./App.css";
import Card from "./components/Card";
import { useFetchRepos } from "./queries/repos";
import { usefavoriteRepoStore } from "./store/useFavoritesRepo";

function App() {
  //react-query
  const { data } = useFetchRepos("chrmartins");

  //zustand
  const favoriteRepoIds = usefavoriteRepoStore(
    (state) => state.favoriteRepoIds
  );
  const addRepoToFavorite = usefavoriteRepoStore(
    (state) => state.addRepoToFavorite
  );
  const removeRepoFromFavorite = usefavoriteRepoStore(
    (state) => state.removeRepoFromFavorite
  );
  //-------

  const handleAddRepoToFavorites = useCallback((repoId: number) => {
    addRepoToFavorite(repoId);
  },[])

  const handleRemoveRepoFromFavorites = useCallback((repoId: number) => {
    removeRepoFromFavorite(repoId);
  },[])

  return (
    <div className="App">
      <h1>Meus repositórios no Github</h1>
      {data?.map((repo) => (
        <Card
          key={repo.id}
          repo={repo}
          isFavorite={favoriteRepoIds.includes(repo.id)}
          addToFavorites={handleAddRepoToFavorites}
          removefromFavorites={handleRemoveRepoFromFavorites}
        />
      ))}
    </div>
  );
}

export default App;
