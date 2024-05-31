from pydantic import BaseModel
from datetime import datetime

class Host(BaseModel):
    game_slug: str = None
    game_end_date: datetime = None
    game_start_date: datetime = None
    game_location: str = None
    game_name: str = None
    game_season: str = None
    game_year: int = None