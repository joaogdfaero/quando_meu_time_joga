import os
import requests
from django.http import JsonResponse

def get_next_games(request, time_id):
    url = f"https://api.api-futebol.com.br/v1/times/{time_id}/partidas/proximas"
    
    api_key = os.getenv('API_KEY')
    
    headers = {
        'Authorization': f'Bearer {api_key}'
    }
    
    response = requests.get(url, headers=headers)
    data = response.json()
    return JsonResponse(data)

