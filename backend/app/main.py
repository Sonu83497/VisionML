from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.prediction import router as prediction_router

app = FastAPI(
    title="VisionML API",
    description="House Price Prediction API",
    version="1.0.0"
)

# Allow Frontend
origins = [
    "http://localhost:3000",
    "https://vision-ml-ochre.vercel.app/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routes
app.include_router(prediction_router)

@app.get("/")
def home():
    return {
        "message": "VisionML API is running successfully."
    }