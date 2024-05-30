from dbConnection import app, db

class OlympicsMedalsCleaned(db.Model):
    __tablename__ = 'olympics_medals_cleaned'
    id = db.Column(db.Integer, primary_key=True)
    discipline_title = db.Column(db.String(50))
    slug_game = db.Column(db.String(50))

# Define a simple model
@app.route('/')
def index():
    medals = OlympicsMedalsCleaned.query.all()
    return {'medals': [{'disciplineTitle': medal.discipline_title, 'slugGame': medal.slug_game} for medal in medals]}

if __name__ == '__main__':
    app.run(debug=True,port=8080)
