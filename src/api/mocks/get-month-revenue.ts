import { http, HttpResponse } from "msw";
import { GetMonthRevenueResponse } from "../get-month-revenue";

export const getMonthRevenueOrdersMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>("/metrics/month-receipt", () => {
  return HttpResponse.json({
    receipt: 3400,
    diffFromLastMonth: 12,
  });
});
