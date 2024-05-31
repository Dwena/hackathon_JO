from pydantic import BaseModel

class Result(BaseModel):
    discipline_title: str = None
    event_title: str = None
    slug_game: str = None
    participant_type: str = None
    medal_type: str = None
    athletes: str = None
    rank_equal: bool = None
    rank_position: int = None
    country_name: str = None
    country_code: str = None
    country_3_letter_code: str = None
    athlete_full_name: str = None
    athlete_url: str =None
    value_unit: int = None
    value_type: str = None