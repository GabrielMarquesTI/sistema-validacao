from sqlalchemy.orm import Session
from app.models.monitor_model import MonitorModel
from app.schemas.monitor_model import MonitorModelCreate



def create_monitor_model(db: Session, model: MonitorModelCreate):
    print(model)
    db_model = MonitorModel(**model.model_dump())
    db.add(db_model)
    db.commit()
    db.refresh(db_model)
    return db_model



def get_monitor_models_by_brand(db: Session, brand_id: int):
    return (
        db.query(MonitorModel)
        .filter(MonitorModel.brand_id == brand_id)
        .all()
    )
