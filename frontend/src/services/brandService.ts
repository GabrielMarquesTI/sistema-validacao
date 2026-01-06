import { api } from "./api"
import { type Brand } from "../types/Brand"

export async function getBrands(): Promise<Brand[]> {
  const response = await api.get("/brands/")
  return response.data
}

export async function createBrand(name: string): Promise<Brand> {
  const response = await api.post("/brands/", { name })
  return response.data
}
