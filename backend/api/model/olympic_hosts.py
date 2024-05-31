from pydantic import BaseModel

class Host(BaseModel):
    game_slug: str
    game_end_date: str
    game_start_date: str
    game_location: str
    game_name: str
    game_season: str
    game_year: str