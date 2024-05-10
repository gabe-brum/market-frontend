import { http, HttpResponse } from "msw";
import { RegisterBody } from "../register";

export const registerMarketMock = http.post<never, RegisterBody>(
  "/restaurants",
  async ({ request }) => {
    const { restaurantName } = await request.json();

    if (restaurantName === "Pizza Shop") {
      return new HttpResponse(null, {
        status: 200,
      });
    }

    return new HttpResponse(null, { status: 401 });
  },
);
