from typing import Any
import pandas as pd

from app.constants import FEATURE_COLUMNS


def prepare_dataframe(data: dict[str, Any]) -> pd.DataFrame:
    """
    Convert request JSON into DataFrame
    matching the trained model features.
    """

    missing = [
        feature
        for feature in FEATURE_COLUMNS
        if feature not in data
    ]

    if missing:
        raise ValueError(
            f"Missing Features: {missing}"
        )

    df = pd.DataFrame([data])

    return df[FEATURE_COLUMNS]