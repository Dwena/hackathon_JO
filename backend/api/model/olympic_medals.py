from pydantic import BaseModel

class Medal(BaseModel):
    discipline_title: str= None
    slug_game: str= None
    event_title: str= None
    event_gender: str= None
    medal_type: str= None
    participant_type: str= None
    athlete_url: str= None
    athlete_full_name: str= None
    country_name: str= None
    country_code: str= None
    country_3_letter_code: str= None