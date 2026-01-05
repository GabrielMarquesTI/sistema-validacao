from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.cellphone_model import CellphoneModel, CellphoneModelCreate
from app.crud.cellphone_model import create_cellphone_model, get_cellphone_models

router = APIRouter(
    prefix="/cellphone-models",
    tags=["Cellphone Models"]
)


@router.post("/", response_model=CellphoneModel)
def create(model: CellphoneModelCreate, db: Session = Depends(get_db)):
    return create_cellphone_model(db, model)


@router.get("/", response_model=list[CellphoneModel])
def list_all(db: Session = Depends(get_db)):
    return get_cellphone_models(db)
