/* eslint-disable @typescript-eslint/naming-convention */
export interface IFilme {
  nome: string;
  lancamento: string;
  duracao: string;
  classificacao: number;
  cartaz: string;
  generos: string[];
  pagina?: string;
  favorito: boolean;
}
