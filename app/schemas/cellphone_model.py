from pydantic import BaseModel

class CellphoneModelBase(BaseModel):
    name: str
    brand_id: int


class CellphoneModelCreate(CellphoneModelBase):
    pass


class CellphoneModel(CellphoneModelBase):
    id: int

    class Config:
        from_attributes = True
