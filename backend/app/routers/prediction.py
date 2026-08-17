from fastapi import APIRouter, HTTPException

from app.predictor import predictor
from app.schemas import HousePredictionRequest
from app.utils import prepare_dataframe

router = APIRouter(
    prefix="/predict",
    tags=["Prediction"]
)


@router.post("/")
def predict_house_price(payload: HousePredictionRequest):

    try:

        data = payload.model_dump(by_alias=True)

        df = prepare_dataframe(data)

        prediction = predictor.predict(df)

        return {
            "success": True,
            "predicted_sale_price": round(prediction, 2)
        }

    except Exception as e:

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )