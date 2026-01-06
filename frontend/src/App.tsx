import { useState } from "react";
import { BrandSelect } from "./components/forms/BrandSelect";
import { ModelSelect } from "./components/forms/ModelSelect";

function App() {
  const [brandId, setBrandId] = useState<number>();
  const [modelId, setModelId] = useState<number>();

  return (
    <div>
      <h1>Sistema de Validação</h1>

      <BrandSelect
        value={brandId}
        onChange={(id) => {
          setBrandId(id);
          setModelId(undefined); // limpa modelo ao trocar marca
        }}
      />

      <ModelSelect
        brandId={brandId}
        value={modelId}
        onChange={(id) => setModelId(id)}
      />

      {modelId && (
        <p>
          Marca: {brandId} | Modelo: {modelId}
        </p>
      )}
    </div>
  );
}

export default App;
