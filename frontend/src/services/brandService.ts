// import { api } from './api'

export type Brand = {
  id: number;
  name: string;
};

const API_URL = "http://127.0.0.1:8000";

export async function getBrands(): Promise<Brand[]> {
  const response = await fetch(`${API_URL}/brands/`);
  if (!response.ok) {
    throw new Error("Erro ao buscar marcas");
  }
  return response.json();
}
