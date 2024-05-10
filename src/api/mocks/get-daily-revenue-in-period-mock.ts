import { http, HttpResponse } from "msw";
import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    { receipt: 829, date: "02/05/2024" },
    { receipt: 423, date: "03/05/2024" },
    { receipt: 545, date: "04/05/2024" },
    { receipt: 976, date: "05/05/2024" },
    { receipt: 212, date: "06/05/2024" },
    { receipt: 453, date: "07/05/2024" },
    { receipt: 433, date: "08/05/2024" },
  ]);
});
