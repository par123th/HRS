from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem.wordnet import WordNetLemmatizer
from ast import literal_eval
from http.client import HTTPResponse
from django.shortcuts import render
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.hashers import make_password
from django.contrib import messages
from django.shortcuts import redirect
import json
import re
from rest_framework.response import Response
import json
from rest_framework.decorators import api_view
from HRS.settings import BASE_DIR
import os

# model imports
import pandas as pd
import numpy as np
import nltk
from ast import literal_eval
from nltk.stem.wordnet import WordNetLemmatizer
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

path = os.path.join(BASE_DIR, 'dataset', 'hotel.csv')
data = pd.read_csv(path)
data['countries'] = data['countries'].str.lower()
data['Tags'] = data['Tags'].str.lower()
stop_words = stopwords.words('english')
lemm = WordNetLemmatizer()


@api_view(('POST',))
def get_results(request):
    param_list = request.POST.dict()
    params = {}
    for key in param_list:
        params = key
    params = json.loads(params)
    location = params['country']
    description = params['description']
    results = recommend_hotel(location, description)

    recom = []

    for index, rows in results.iterrows():
        recom.append({"key": index, "hotel_name": rows['Hotel_Name'], "average_score": rows['Average_Score'],
                      "hotel_address": rows['Hotel_Address']})
    return Response(recom)

# Model


def recommend_hotel(location, description):
    # data pre processing
    description = description.lower()
    word_tokenize(description)
    global stop_words
    global lemm
    global data

    # remove stopwords from corpus
    filtered = {word for word in description if not word in stop_words}
    filtered_set = set()
    for fs in filtered:
        filtered_set.add(lemm.lemmatize(fs))

    country = data[data['countries'] == location.lower()]
    country = country.set_index(np.arange(country.shape[0]))

    list1 = []
    list2 = []
    cos = []

    for i in range(country.shape[0]):
        temp_token = word_tokenize(country["Tags"][i])
        temp_set = [word for word in temp_token if not word in stop_words]
        temp2_set = set()
        for s in temp_set:
            temp2_set.add(lemm.lemmatize(s))
        vector = temp2_set.intersection(filtered_set)
        cos.append(len(vector))
    country['similarity'] = cos

    country = country.sort_values(by='similarity', ascending=False)
    country.drop_duplicates(subset='Hotel_Name', keep='first', inplace=True)

    country.sort_values('Average_Score', ascending=False, inplace=True)
    country.reset_index(inplace=True)

    return country[["Hotel_Name", "Average_Score", "Hotel_Address"]].head(10)


#recommend_hotel('Italy', 'I am going for a business trip')
#recommend_hotel('UK','I am going on a honeymoon, I need a honeymoon suite room for 3 nights')
