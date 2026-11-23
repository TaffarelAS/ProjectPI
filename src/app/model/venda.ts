export interface Venda {
  id?: number;
  clienteId: string;
  data: string;
  produtos: {
    produtoId: number;
    nome: string;
    preco: number;
    quantidade: number;
  }[];
  total: number;
}