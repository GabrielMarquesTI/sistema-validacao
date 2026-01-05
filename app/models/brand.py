from sqlalchemy import Column, Integer, String
from app.database import Base
from sqlalchemy.orm import relationship


class Brand(Base):
    __tablename__ = "brands"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)

    cellphone_models = relationship("CellphoneModel", back_populates="brand")
    monitor_models = relationship("MonitorModel", back_populates="brand")
