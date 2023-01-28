import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteRepoStore {
  favoriteRepoIds: number[];
  addRepoToFavorite: (repoId: number) => void;
  removeRepoFromFavorite: (repoId: number) => void;
}

export const usefavoriteRepoStore = create(
  persist<FavoriteRepoStore>((set) => ({

    favoriteRepoIds: [],
    
    addRepoToFavorite: (repoId: number) => {
      set((state) => ({
        favoriteRepoIds: [...state.favoriteRepoIds, repoId],
      }));
    },

    removeRepoFromFavorite: (repoId: number) => {
      set((state) => ({
        favoriteRepoIds: state.favoriteRepoIds.filter(
          (favoriteRepoId) => favoriteRepoId !== repoId
        ),
      }));
    },
  }), {
    //nome da chave que será salva no localStorage por causa do persist
    name: "favorite-repo-store",
  })
);
