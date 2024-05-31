from pydantic import BaseModel

class Athlete(BaseModel):
    athlete_full_name: str = None
    athlete_url: str = None
    games_participations: int = None
    athlete_year_birth: int = None
    athlete_medals: str =None
    bio: str =None
    first_game: str =None