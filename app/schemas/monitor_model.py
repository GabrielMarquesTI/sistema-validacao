from pydantic import BaseModel


class MonitorModelBase(BaseModel):
    name: str
    size: int
    brand_id: int


class MonitorModelCreate(MonitorModelBase):
    pass


class MonitorModel(MonitorModelBase):
    id: int

    class Config:
        from_attributes = True
