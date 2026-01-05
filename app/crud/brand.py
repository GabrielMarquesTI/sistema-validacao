from sqlalchemy.orm import Session
from app.models.brand import Brand
from app.schemas.brand import BrandCreate


def create_brand(db: Session, brand: BrandCreate):
    db_brand = Brand(name=brand.name)
    db.add(db_brand)
    db.commit()
    db.refresh(db_brand)
    return db_brand


def get_brands(db: Session):
    return db.query(Brand).all()
