from pydantic import BaseModel

class Result(BaseModel):
    discipline_title: str
    event_title: str
    slug_game: str
    participant_type: str
    medal_type: str
    athletes: str
    rank_equal: bool
    rank_position: int
    country_name: str
    country_code: str
    country_3_letter_code: str
    athlete_full_name: str
    athlete_url: str
    value_unit: int
    value_type: str