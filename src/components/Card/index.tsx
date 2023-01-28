import { Repo } from "../../queries/repos/interface";
import "./styles.css";

type CardProps = {
  repo: Repo;
  isFavorite: boolean;
  addToFavorites: (id: number) => void;
  removefromFavorites: (id: number) => void;
};

export default function Card({ repo, addToFavorites, isFavorite, removefromFavorites }: CardProps) {
  function handleToggleFavorites() {
    if (isFavorite) {
      removefromFavorites(repo.id);
    } else {
      addToFavorites(repo.id);
    }
  }

  return (
    <div className="card">
      <h2>{repo.name}</h2>

      <div className="card-buttons">
        <button onClick={handleToggleFavorites}>
          {isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        </button>
      </div>
    </div>
  );
}
