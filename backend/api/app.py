from flask import Flask
from services.dbConnection import app, db

class OlympicsMedalsCleaned(db.Model):
    __tablename__ = 'olympics_medals_cleaned'
    disciplineTitle = db.Column(db.String(50))
    slugGame = db.Column(db.String(50))

# Define a simple model
@app.route('/')
def index():
    medals = OlympicsMedalsCleaned.query.all()
    return {'medals': [{'disciplineTitle': medal.disciplineTitle, 'slugGame': medal.slugGame} for medal in medals]}

if __name__ == '__main__':
    app.run(debug=True)
