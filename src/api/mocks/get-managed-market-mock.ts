import { http, HttpResponse } from "msw";
import { GetManagedMarketResponse } from "../get-managed-market";

export const getManagedMarketMock = http.get<
  never,
  never,
  GetManagedMarketResponse
>("/managed-restaurant", () => {
  return HttpResponse.json({
    id: "custom-market-id",
    name: "Merkadin dos Guri",
    description: "custom market description",
    managerId: "custom-user-id",
    createdAt: new Date(),
    updatedAt: null,
  });
});
