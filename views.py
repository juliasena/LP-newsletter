from main import app
from flask import render_template 
import requests

API_URL = "https://randomuser.me/api/?results=10&inc=name,email,picture"


# Rota para a página inicial
@app.route('/', methods=['GET'])
def index():
    return render_template('homepage.html')

# Rota para a página do time
@app.route('/time')
def time():
    try:
        response = requests.get(API_URL)
        response.raise_for_status()
        
        data = response.json()
        curadores = data.get('results', [])
        
        return render_template('time.html', curadores_data=curadores)
    
    except requests.exceptions.RequestException as e:
        print(f"Erro ao obter dados da API: {e}") 
        return "Desculpe, não foi possível carregar a página. Tente novamente mais tarde.", 500