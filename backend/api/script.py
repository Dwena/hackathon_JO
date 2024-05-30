import pymysql
import pandas as pd
from dotenv import load_dotenv
import os

load_dotenv()

DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_NAME = os.getenv('DB_NAME')
DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')

csv_file = 'C:/CODE ET LOGICIEL/IPSSI/année2/s9-HACKATHON/hackathon_JO/backend/api/olympic_medals_cleaned.csv'


try:
    data = pd.read_csv(csv_file,delimiter=";",encoding='utf-8')
except UnicodeDecodeError:
    try:
        data = pd.read_csv(csv_file,delimiter=";", encoding='latin1')
    except UnicodeDecodeError:
        try:
            data = pd.read_csv(csv_file,delimiter=";", encoding='ISO-8859-1')
        except UnicodeDecodeError as e:
            print(f"Error reading the file: {e}")


connection = pymysql.connect(
    host=DB_HOST,
    user=DB_USER,
    password=DB_PASSWORD,
    database=DB_NAME,
    port=int(DB_PORT)
)

cursor = connection.cursor()

insertQuery = """ INSERT INTO olympics_medals_cleaned (Unnamed,discipline_title,slug_game,event_title,event_gender,medal_type,participant_type,athlete_url,athlete_full_name,country_name,country_code,country_3_letter_code) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""

for i, row in data.iterrows():
    cursor.execute(insertQuery, tuple(row))

connection.commit()
connection.close()
