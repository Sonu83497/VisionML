from pydantic import BaseModel, Field


class HousePredictionRequest(BaseModel):
    OverallQual: int = Field(..., ge=1, le=10)
    GarageCars: int
    FullBath: int
    GrLivArea: float
    TotalBsmtSF: float
    Fireplaces: int
    BsmtFinSF1: float
    HalfBath: int

    FirstFlrSF: float = Field(..., alias="1stFlrSF")
    SecondFlrSF: float = Field(..., alias="2ndFlrSF")

    model_config = {
        "populate_by_name": True
    }