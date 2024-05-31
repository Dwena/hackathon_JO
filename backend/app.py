from fastapi import FastAPI
from backend.api.model.models import olympics_medals_cleaned
from backend.api.model.olympic_athletes import Athlete
from backend.api.model.olympic_hosts import Host
from backend.api.model.olympic_results import Result
from backend.api.model.olympic_medals import Medal

from backend.api.services import get_medals, get_results, get_athletes, get_hosts


app = FastAPI()


@app.get("/medals/", response_model=list[Medal])
async def read_medals(skip: int = 0, limit: int = 10):
    return get_medals()

@app.get("/results/", response_model=list[Result])
async def read_results(skip: int = 0, limit: int = 10):
    return get_results()

@app.get("/athletes/", response_model=list[Athlete])
async def read_athletes(skip: int = 0, limit: int = 10):
    return get_athletes()

@app.get("/hosts/", response_model=list[Host])
async def read_hosts(skip: int = 0, limit: int = 10):
    return get_hosts()
