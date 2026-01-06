# Sistema de Validação de Equipamentos

API desenvolvida em **FastAPI** para cadastro e consulta de **marcas** e **modelos de equipamentos**, como **celulares** e **monitores**.  
O projeto segue uma arquitetura organizada com **routers**, **schemas**, **models** e **CRUD**, utilizando **SQLAlchemy** e **SQLite**.

---

## 🚀 Tecnologias Utilizadas

- Python 3.12
- FastAPI
- SQLAlchemy
- Pydantic
- SQLite
- Uvicorn

---

## 📂 Estrutura do Projeto

app/
├── crud/
│ ├── brand.py
│ ├── cellphone_model.py
│ └── monitor_model.py
├── models/
│ ├── brand.py
│ ├── cellphone_model.py
│ └── monitor_model.py
├── routers/
│ ├── brand.py
│ ├── cellphone_model.py
│ └── monitor_model.py
├── schemas/
│ ├── brand.py
│ ├── cellphone_model.py
│ └── monitor_model.py
├── database.py
└── main.py

---

## 📌 Funcionalidades

### 🔹 Brands
- `GET /brands/` — Listar todas as marcas
- `POST /brands/` — Cadastrar nova marca

### 🔹 Cellphone Models
- `GET /cellphone-models/` — Listar modelos de celulares
- `POST /cellphone-models/` — Cadastrar modelo de celular

### 🔹 Monitor Models
- `POST /monitor-models/` — Cadastrar modelo de monitor
- `GET /monitor-models/by-brand/{brand_id}` — Listar monitores por marca

---

## ▶️ Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/GabrielMarquesTI/sistema-validacao.git
cd sistema-validacao
2️⃣ Criar e ativar o ambiente virtual
bash
Copiar código
python -m venv venv
source venv/bin/activate  # Linux / WSL
venv\Scripts\activate     # Windows
3️⃣ Instalar as dependências
bash
Copiar código
pip install fastapi uvicorn sqlalchemy pydantic
4️⃣ Rodar a aplicação
bash
Copiar código
uvicorn app.main:app --reload
A API estará disponível em:

cpp
Copiar código
http://127.0.0.1:8000
Documentação automática (Swagger):

arduino
Copiar código
http://127.0.0.1:8000/docs
🧠 Objetivo do Projeto
Este projeto tem como objetivo:

Praticar FastAPI

Aplicar conceitos de API REST

Estruturar um backend escalável

Servir como base para futuros módulos de validação e controle de equipamentos

👨‍💻 Autor
Gabriel Marques
Analista de Suporte em transição para Desenvolvedor Backend Python 🚀
GitHub: https://github.com/GabrielMarquesTI


git add README.md
git commit -m "add project documentation"
git push