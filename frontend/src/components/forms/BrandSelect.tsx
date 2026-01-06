import { useEffect, useState } from "react";
import { getBrands, type Brand } from "../../services/brandService";

type BrandSelectProps = {
  value?: number;
  onChange: (brandId: number) => void;
};

export function BrandSelect({ value, onChange }: BrandSelectProps) {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBrands() {
      try {
        const data = await getBrands();
        setBrands(data);
      } catch (error) {
        console.error("Erro ao carregar marcas:", error);
      } finally {
        setLoading(false);
      }
    }

    loadBrands();
  }, []);

  if (loading) {
    return <p>Carregando marcas...</p>;
  }

  return (
    <div>
      <label htmlFor="brand">Marca</label>
      <select
        id="brand"
        value={value ?? ""}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value="">Selecione uma marca</option>

        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
    </div>
  );
}
