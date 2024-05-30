from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String
from dbConnection import DATABASE_URL

metadata = MetaData()

olympics_medals_cleaned = Table(
    "olympics_medals_cleaned",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("discipline_title", String(length=50)),
    Column("slug_game", String(length=50)),
    Column("event_title", String(length=50)),
    Column("event_gender", String(length=50)),
    Column("medal_type", String(length=50)),
    Column("participant_type", String(length=50)),
    Column("athlete_url", String(length=255)),
    Column("athlete_full_name", String(length=100)),
    Column("country_name", String(length=100)),
    Column("country_code", String(length=10)),
    Column("country_3_letter_code", String(length=10)),
)

engine = create_engine(DATABASE_URL)
metadata.create_all(engine)
