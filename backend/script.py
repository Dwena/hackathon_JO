import pymysql
import pandas as pd
from dotenv import load_dotenv
import os
import xml.etree.ElementTree as ET


load_dotenv()

DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_NAME = os.getenv('DB_NAME')
DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')

csv_file = 'C:/CODE ET LOGICIEL/IPSSI/année2/s9-HACKATHON/hackathon_JO/backend/api/data/olympic_hosts.xml'


tree = ET.parse(csv_file)
root = tree.getroot()


data = pd.DataFrame(columns=['game_slug', 'game_end_date', 'game_start_date', 'game_location', 'game_name', 'game_season','game_year'])

for elem in root:
    game_slug = elem.find('game_slug').text
    game_end_date = elem.find('game_end_date').text
    game_start_date = elem.find('game_start_date').text
    game_location = elem.find('game_location').text
    game_name = elem.find('game_name').text
    game_season = elem.find('game_season').text
    game_year = elem.find('game_year').text

    data = data._append({'game_slug': game_slug, 'game_end_date': game_end_date, 'game_start_date': game_start_date, 'game_location': game_location, 'game_name': game_name, 'game_season': game_season, 'game_year': game_year}, ignore_index=True)

connection = pymysql.connect(
    host=DB_HOST,
    user=DB_USER,
    password=DB_PASSWORD,
    database=DB_NAME,
    port=int(DB_PORT)
)

cursor = connection.cursor()

insertQuery = """INSERT INTO olympic_hosts (game_slug, game_end_date, game_start_date, game_location, game_name, game_season,game_year) VALUES (%s, %s, %s, %s, %s, %s, %s)"""

data_tuple = [tuple(x) for x in data.values]
try:
    cursor.executemany(insertQuery, data_tuple)
    connection.commit()
except Exception as e:
    print(f"Error inserting data: {e}")

connection.close()
