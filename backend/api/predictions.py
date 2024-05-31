from tensorflow.keras.models import load_model
import numpy as np

model_path = 'C:/CODE ET LOGICIEL/IPSSI/année2/s9-HACKATHON/hackathon_JO/backend/ai-models/model_medals_prediction.h5'

model = load_model(model_path)

model.summary()

countries = ['USA', 'China', 'Japan', 'France', 'Germany','Spain','Norway','Canada','Italy','Sweden','Netherlands','South Korea','Switzerland','United Kingdom','Australia','Brazil','Finland','Cuba','Hungary','Poland','Denmark','Czech Republic','Belgium','New Zealand','Ukraine','Austria','Slovenia','Jamaica','Ethiopia','Croatia','Romania','Kenya','Ireland','Greece','Argentina','Portugal','Turkey','Kazakhstan','Belarus','Bulgaria','Slovakia','Lithuania','Latvia','Uzbekistan','Estonia','Georgia','Armenia','Azerbaijan','Moldova','Kyrgyzstan','Tajikistan','Turkmenistan','Monaco','Liechtenstein','Luxembourg','Iceland','Montenegro','Macedonia','Serbia','Bosnia and Herzegovina','Albania','Kosovo','Andorra','San Marino','Malta','Cyprus','Bahrain','Qatar','United Arab Emirates','Saudi Arabia','Kuwait','Oman','Lebanon','Jordan','Iraq']
country_dict = {country: idx for idx, country in enumerate(countries)}

def encode_country(country, country_dict):
    encoded_country = country_dict.get(country, -1)
    if encoded_country == -1:
        raise ValueError(f"Le pays '{country}' n'est pas reconnu.")
    return encoded_country

def prepare_input_data(country, year):
    encoded_country = encode_country(country)
    return np.array([[encoded_country, year]])

def predict(model, input_data):
    return model.predict(input_data)