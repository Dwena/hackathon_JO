
from model.olympic_athletes import Athlete
from model.olympic_hosts import Host
from model.olympic_medals import Medal
from model.olympic_results import Result
from api.dbConnection import get_database

db = get_database()

def get_medals():
    query = db.select([db.olympics_medals_cleaned])
    results = db.execute(query).fetchall()
    return [Medal(**dict(result)) for result in results]

def get_results():
    query = db.select([db.olympic_results])
    results = db.execute(query).fetchall()
    return [Result(**dict(result)) for result in results]

def get_athletes():
    query = db.select([db.olympic_athletes])
    results = db.execute(query).fetchall()
    return [Athlete(**dict(result)) for result in results]

def get_hosts():
    query = db.select([db.olympic_hosts])
    results = db.execute(query).fetchall()
    return [Host(**dict(result)) for result in results]
