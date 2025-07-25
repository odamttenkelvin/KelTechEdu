import pandas as pd
from sklearn.linear_model import LogisticRegression

# Sample data
data = {
    'attendance_rate': [0.9, 0.85, 0.6, 0.95, 0.5],
    'average_grade': [80, 75, 55, 90, 40],
    'at_risk': [0, 0, 1, 0, 1]
}

df = pd.DataFrame(data)

# Train model
X = df[['attendance_rate', 'average_grade']]
y = df['at_risk']
model = LogisticRegression().fit(X, y)

# Predict new student
new_student = pd.DataFrame([[0.7, 60]], columns=['attendance_rate', 'average_grade'])
prediction = model.predict(new_student)

print("Prediction:", "At risk" if prediction[0] == 1 else "Not at risk")
