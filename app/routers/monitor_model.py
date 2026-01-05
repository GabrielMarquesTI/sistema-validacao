from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.monitor_model import MonitorModel, MonitorModelCreate
from app import crud

router = APIRouter(prefix="/monitor-models", tags=["Monitor Models"])


@router.post("/", response_model=MonitorModel)
def create_monitor(model: MonitorModelCreate, db: Session = Depends(get_db)):
    return crud.create_monitor_model(db, model)


@router.get("/by-brand/{brand_id}", response_model=list[MonitorModel])
def list_by_brand(brand_id: int, db: Session = Depends(get_db)):
    return crud.get_monitor_models_by_brand(db, brand_id)
