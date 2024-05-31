from pydantic import BaseModel

class Athlete(BaseModel):
    athlete_full_name: str
    athlete_url: str
    games_participations: int
    athlete_year_birth: int
    athlete_medals: str
    bio: str
    first_game: str