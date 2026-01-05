from fastapi import FastAPI
from app.database import Base, engine
from app.routers import brand, cellphone_model, monitor_model
from app.models import Brand

app = FastAPI(
    title="Sistema de Validação",
    version="1.0"
)

Base.metadata.create_all(bind=engine)

app.include_router(brand.router)
app.include_router(cellphone_model.router)
app.include_router(monitor_model.router)

@app.get("/")
def home():
    return {"status": "online"}
