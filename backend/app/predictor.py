import joblib

from app.config import MODEL_PATH


class HousePricePredictor:
    """
    Loads the trained machine learning pipeline
    and performs house price predictions.
    """

    def __init__(self):

        self.model = self.load_model()

    def load_model(self):

        try:

            model = joblib.load(MODEL_PATH)

            print("✅ Model loaded successfully.")

            return model

        except Exception as e:

            raise RuntimeError(
                f"Failed to load model: {e}"
            )

    def predict(self, data):

        prediction = self.model.predict(data)

        return float(prediction[0])


# Singleton instance
predictor = HousePricePredictor()