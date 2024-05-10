import { api } from '@/lib/axios'

export interface GetManagedMarketResponse {
  id: string;
  name: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null;
}

export async function getManagedMarket() {
  const response = await api.get<GetManagedMarketResponse>('/managed-restaurant')

  return response.data
}