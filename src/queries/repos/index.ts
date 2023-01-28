import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import api from "../../services/api";
import { Repo } from "./interface";

// Função usando o Axios para buscar os repositórios do usuário
async function getRepos(ctx: QueryFunctionContext) {
  const [ , userId ] = ctx.queryKey;
  const { data } = await api.get<Repo[]>(`/users/${userId}/repos`);

  return data;
}

// Função usando react query (camada de cache)
export function useFetchRepos(userId: string) {
  return useQuery(["repos", userId], getRepos);
}
