from fastapi import FastAPI
from api.model.olympic_athletes import Athlete
from api.model.olympic_hosts import Host
from api.model.olympic_results import Result
from api.model.olympic_medals import Medal
from api.services import get_medals, get_results, get_athletes, get_hosts

from api.dbConnection import get_database

db = get_database()

app = FastAPI()


@app.on_event("startup")
async def startup():
    await db.connect()

@app.on_event("shutdown")
async def shutdown():
    await db.disconnect()

@app.get("/medals/", response_model=list[Medal])
async def read_medals():
    return await get_medals(db)

@app.get("/results/", response_model=list[Result])
async def read_results():
    return await get_results(db)

@app.get("/athletes/", response_model=list[Athlete])
async def read_athletes():
    return await get_athletes(db)

@app.get("/hosts/", response_model=list[Host])
async def read_hosts():
    return await get_hosts(db)
