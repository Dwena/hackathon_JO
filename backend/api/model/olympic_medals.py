from pydantic import BaseModel

class Medal(BaseModel):
    discipline_title: str
    slug_game: str
    event_title: str
    event_gender: str
    medal_type: str
    participant_type: str
    athlete_url: str
    athlete_full_name: str
    country_name: str
    country_code: str
    country_3_letter_code: str