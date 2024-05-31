
async def get_medals(db):
    query = "SELECT * FROM olympics_medals_cleaned"
    return await db.fetch_all(query)

async def get_results(db):
    query = "SELECT * FROM olympic_results"
    return await db.fetch_all(query)

async def get_athletes(db):
    query = "SELECT * FROM olympic_athletes"
    return await db.fetch_all(query)

async def get_hosts(db):
    query = "SELECT * FROM olympic_hosts"
    return await db.fetch_all(query)
