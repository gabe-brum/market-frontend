import { http, HttpResponse } from "msw";
import { GetPopularProducts } from "../get-popular-products";

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProducts
>("/metrics/popular-products", () => {
  return HttpResponse.json([
    { amount: 4, product: "Banana catarina" },
    { amount: 6, product: "Margarina Delícia" },
    { amount: 2, product: "Pão Seven Boys" },
    { amount: 12, product: "Massa Espaguete Renata" },
    { amount: 9, product: "Chuchu" },
  ]);
});
