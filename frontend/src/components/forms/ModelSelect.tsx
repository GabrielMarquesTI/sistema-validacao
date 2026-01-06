import { useEffect, useState } from "react";
import {
  getMonitorModelsByBrand,
  type MonitorModel,
} from "../../services/monitorService";

type ModelSelectProps = {
  brandId?: number;
  value?: number | null;
  onChange: (modelId: number | null) => void;
};

export function ModelSelect({
  brandId,
  value,
  onChange,
}: ModelSelectProps) {
  const [models, setModels] = useState<MonitorModel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 🔹 Se não houver marca selecionada
    if (!brandId) {
      setModels([]);
      onChange(null); // reseta modelo
      return;
    }

    async function loadModels() {
      setLoading(true);
      try {
        const data = await getMonitorModelsByBrand(brandId);
        setModels(data);
        onChange(null); // reseta modelo ao trocar marca
      } catch (error) {
        console.error("Erro ao carregar modelos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadModels();
  }, [brandId]);

  if (!brandId) {
    return <p>Selecione uma marca primeiro</p>;
  }

  return (
    <div>
      <label htmlFor="model">Modelo</label>

      <select
        id="model"
        value={value ?? ""}
        onChange={(e) =>
          onChange(e.target.value ? Number(e.target.value) : null)
        }
        disabled={loading}
      >
        <option value="">Selecione um modelo</option>

        {models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>

      {loading && <p>Carregando modelos...</p>}
    </div>
  );
}
