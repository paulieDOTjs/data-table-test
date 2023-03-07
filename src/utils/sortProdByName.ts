import { Product } from "../service/ProductService";

export const sortProdByName = (prods: Array<Product>, order: 1 | -1) =>
  prods.sort((prod1, prod2) => prod1.name.localeCompare(prod2.name) * order);
