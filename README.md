## Live Demo

Frontend:
https://vision-ml-ochre.vercel.app/

API:
https://visionml-zsja.onrender.com

# 🏠 VisionML — AI House Price Predictor

![VisionML](https://img.shields.io/badge/AI-House%20Price%20Prediction-blue)
![Machine Learning](https://img.shields.io/badge/Machine%20Learning-XGBoost-green)
![Frontend](https://img.shields.io/badge/Frontend-Next.js-black)
![Backend](https://img.shields.io/badge/API-FastAPI-red)

## 🚀 Overview

**VisionML** is an AI-powered House Price Prediction platform that uses Machine Learning to estimate property prices instantly based on user-provided house features.

The project combines a powerful **XGBoost Regression Model** with a modern full-stack architecture using **Next.js, TypeScript, Tailwind CSS, FastAPI, and Python**.

VisionML demonstrates the complete Machine Learning lifecycle:

* Data preprocessing
* Model training
* Model evaluation
* Model serialization
* API deployment
* Frontend integration
* Real-time prediction

---

# ✨ Features

✅ AI-based house price prediction
✅ Real-time property valuation
✅ XGBoost Regression model
✅ FastAPI REST API backend
✅ Modern Next.js user interface
✅ Responsive design
✅ ML model integration
✅ Fast prediction response
✅ Production-ready project structure

---

# 📊 Model Performance

| Parameter        | Details              |
| ---------------- | -------------------- |
| Algorithm        | XGBoost Regression   |
| Accuracy         | **89.97%**           |
| Training Data    | House Prices Dataset |
| Training Samples | 1460+ Houses         |
| Input Features   | 10 Features          |
| Evaluation       | Regression Metrics   |

---

# 🧠 How VisionML Works

## 1️⃣ Input Features

Users enter important property details:

* Overall Quality
* Living Area
* Garage Capacity
* Number of Bathrooms
* Bedrooms
* Property Features
* Other House Attributes

## 2️⃣ AI Processing

The input features are sent to the FastAPI backend.

The backend:

* Validates input data
* Applies preprocessing
* Loads trained XGBoost model
* Generates prediction

## 3️⃣ Price Prediction

The trained ML model predicts the estimated house market value and returns the result instantly.

---

# 🏗️ System Architecture

```
                 User
                  |
                  |
                  ↓
          Next.js Frontend
                  |
                  |
             REST API
                  |
                  ↓
            FastAPI Backend
                  |
                  |
          Feature Processing
                  |
                  ↓
        XGBoost Regression Model
                  |
                  ↓
          Predicted House Price
```

---

# 🛠️ Tech Stack

## Frontend

* Next.js
* TypeScript
* React
* Tailwind CSS
* Lucide Icons

## Backend

* FastAPI
* Python
* Uvicorn
* Pydantic

## Machine Learning

* XGBoost
* Scikit-learn
* Pandas
* NumPy
* Joblib

## Tools

* Git
* GitHub
* VS Code

---

# 📂 Project Structure

```
VisionML
│
├── frontend
│   │
│   ├── app
│   ├── components
│   ├── public
│   ├── styles
│   ├── package.json
│   └── next.config.js
│
│
├── backend
│   │
│   ├── main.py
│   ├── requirements.txt
│   ├── schemas.py
│   │
│   ├── utils
│   │   └── preprocessing.py
│   │
│   └── model
│       ├── house_price_model.pkl
│       └── scaler.pkl
│
│
├── dataset
│   └── house_prices.csv
│
│
├── notebooks
│   └── House_Price_Prediction_Model.ipynb
│
│
├── README.md
├── .gitignore
└── LICENSE
```

---

# 🤖 Machine Learning Pipeline

```
Dataset
   |
   ↓
Data Cleaning
   |
   ↓
Exploratory Data Analysis
   |
   ↓
Feature Engineering
   |
   ↓
Feature Scaling
   |
   ↓
XGBoost Training
   |
   ↓
Model Evaluation
   |
   ↓
Save Model (.pkl)
   |
   ↓
FastAPI Integration
   |
   ↓
Prediction
```

---

# 📁 Model Files

Inside:

```
backend/model/
```

### house_price_model.pkl

Contains the trained XGBoost regression model used for house price prediction.

### scaler.pkl

Stores the preprocessing scaler used to transform input features before prediction.

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/Sonu83497/VisionML.git

cd VisionML
```

---

# Frontend Setup

Go to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run application:

```bash
npm run dev
```

Frontend:

```
http://localhost:3000
```

---

# Backend Setup

Open another terminal:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

### Windows

```bash
venv\Scripts\activate
```

### Linux/Mac

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start FastAPI server:

```bash
uvicorn main:app --reload
```

Backend API:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

---

# 🔌 API Endpoint

## Predict House Price

### POST

```
/predict
```

Example Request:

```json
{
  "overall_quality": 8,
  "living_area": 2000,
  "garage_capacity": 2,
  "bathrooms": 3
}
```

Example Response:

```json
{
  "predicted_price": 245000
}
```

---

# 📸 Screenshots

Add your project screenshots:

```
Home Page

Prediction Page

Prediction Result

About Section
```

---

# 🚀 Future Improvements

* User authentication system
* Prediction history dashboard
* Cloud deployment
* More ML algorithms comparison
* Real estate analytics dashboard
* Interactive charts
* Property recommendation system

---

# 🎯 Applications

🏡 Real Estate Price Estimation
📊 Market Analysis
🤖 Machine Learning Deployment Practice
📈 Data Driven Property Decisions

---

# 👨‍💻 Author

## Sonu Prajapati

**Aspiring AI & Machine Learning Engineer**

### Connect With Me

GitHub:

```
https://github.com/Sonu83497
```

Portfolio:

```
https://sonuprajapati.dev
```

LinkedIn:

```
Add your LinkedIn profile
```

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Your support helps me build more AI and Machine Learning projects.

---

# 📜 License

This project is created for learning, research, and portfolio purposes.
