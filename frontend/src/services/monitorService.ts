const API_URL = "http://127.0.0.1:8000";

export type MonitorModel = {
  id: number;
  name: string;
  brand_id: number;
};

export async function getMonitorModelsByBrand(
  brandId: number
): Promise<MonitorModel[]> {
  const response = await fetch(
    `${API_URL}/monitor-models/by-brand/${brandId}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar modelos");
  }

  return response.json();
}
