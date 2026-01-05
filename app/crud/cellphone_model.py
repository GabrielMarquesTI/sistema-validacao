from sqlalchemy.orm import Session
from app.models.cellphone_model import CellphoneModel
from app.schemas.cellphone_model import CellphoneModelCreate


def create_cellphone_model(db: Session, model: CellphoneModelCreate):
    db_model = CellphoneModel(
        name=model.name,
        brand_id=model.brand_id
    )
    db.add(db_model)
    db.commit()
    db.refresh(db_model)
    return db_model


def get_cellphone_models(db: Session):
    return db.query(CellphoneModel).all()
