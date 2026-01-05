from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base


class MonitorModel(Base):
    __tablename__ = "monitor_models"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    size = Column(Integer, nullable=False)

    brand_id = Column(Integer, ForeignKey("brands.id"), nullable=False)

    brand = relationship("Brand", back_populates="monitor_models")
