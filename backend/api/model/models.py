from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, Boolean
from api.dbConnection import DATABASE_URL

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

olympic_hosts = Table(
    "olympic_hosts",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("game_slug", String(length=50)),
    Column("game_end_date", String(length=50)),
    Column("game_start_date", String(length=50)),
    Column("game_location", String(length=50)),
    Column("game_name", String(length=50)),
    Column("game_season", String(length=50)),
    Column("game_year", String(length=50)),
)

olympic_athletes = Table(
    "olympic_athletes",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("athlete_full_name", String(length=100)),
    Column("athlete_url", String(length=255)),
    Column("games_participations", Integer),
    Column("athlete_year_birth", Integer),
    Column("athlete_medals", String(length=50)),
    Column("bio", String(length=255)),
    Column("first_game", String(length=100)),
)

olympic_results = Table(
    "olympic_results",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("discipline_title", String(length=50)),
    Column("event_title", String(length=50)),
    Column("slug_game", String(length=50)),
    Column("participant_type", String(length=50)),
    Column("medal_type", String(length=100)),
    Column("athletes", String(length=100)),
    Column("rank_equal",Boolean),
    Column("rank_position", Integer),
    Column("country_name", String(length=100)),
    Column("country_code", String(length=100)),
    Column("country_3_letter_code", String(length=100)),
    Column("athlete_full_name", String(length=100)),
    Column("athlete_url", String(length=255)),
    Column("value_unit", Integer),
    Column("value_type", String(length=50)),
)

engine = create_engine(DATABASE_URL)
metadata.create_all(engine)
