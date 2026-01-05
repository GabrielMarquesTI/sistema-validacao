from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.brand import Brand, BrandCreate
from app.crud.brand import create_brand, get_brands

router = APIRouter(
    prefix="/brands",
    tags=["Brands"]
)


@router.post("/", response_model=Brand)
def create(brand: BrandCreate, db: Session = Depends(get_db)):
    return create_brand(db, brand)


@router.get("/", response_model=list[Brand])
def list_all(db: Session = Depends(get_db)):
    return get_brands(db)
