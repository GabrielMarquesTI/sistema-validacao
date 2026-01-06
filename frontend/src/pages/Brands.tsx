import { useEffect, useState } from "react"
import { type Brand } from "../types/Brand"
import { getBrands, createBrand } from "../services/brandService"

export default function Brands() {
  const [brands, setBrands] = useState<Brand[]>([])
  const [name, setName] = useState("")

  async function loadBrands() {
    const data = await getBrands()
    setBrands(data)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await createBrand(name)
    setName("")
    loadBrands()
  }

  useEffect(() => {
    loadBrands()
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Marcas</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nome da marca"
        />
        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {brands.map(brand => (
          <li key={brand.id}>{brand.name}</li>
        ))}
      </ul>
    </div>
  )
}
