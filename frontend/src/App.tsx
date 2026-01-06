import { useEffect, useState } from "react";
import { getBrands, type Brand } from "./services/brandService";

function App() {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    getBrands()
      .then((data) => {
        console.log("Brands recebidas:", data); 
        setBrands(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar marcas:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sistema de Validação</h1>

      <h2>Marcas</h2>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
