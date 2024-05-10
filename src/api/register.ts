import { api } from "@/lib/axios";

export interface RegisterBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerMarket({ email, managerName, phone, restaurantName }: RegisterBody) {
  await api.post('/restaurants', {
    email, managerName, phone, restaurantName
  })
}