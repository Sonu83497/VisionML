from pathlib import Path

# Base Directory
BASE_DIR = Path(__file__).resolve().parent.parent

# Models Directory
MODEL_DIR = BASE_DIR / "models"

# Model File
MODEL_PATH = MODEL_DIR / "visionml_model.pkl"