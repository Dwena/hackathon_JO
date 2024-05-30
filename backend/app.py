from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from api.dbConnection import get_database
from api.models import olympics_medals_cleaned

database = get_database()

app = FastAPI()

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

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/medals/", response_model=list[Medal])
async def read_medals(skip: int = 0, limit: int = 10):
    query = olympics_medals_cleaned.select().offset(skip).limit(limit)
    return await database.fetch_all(query)

@app.post("/medals/", response_model=Medal)
async def create_medal(medal: Medal):
    query = olympics_medals_cleaned.insert().values(
        discipline_title=medal.discipline_title,
        slug_game=medal.slug_game,
        event_title=medal.event_title,
        event_gender=medal.event_gender,
        medal_type=medal.medal_type,
        participant_type=medal.participant_type,
        athlete_url=medal.athlete_url,
        athlete_full_name=medal.athlete_full_name,
        country_name=medal.country_name,
        country_code=medal.country_code,
        country_3_letter_code=medal.country_3_letter_code,
    )
    last_record_id = await database.execute(query)
    return {**medal.dict(), "id": last_record_id}
