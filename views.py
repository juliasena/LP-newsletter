from main import app
from flask import render_template 
import requests

API_URL = "https://randomuser.me/api/?results=10&inc=name,email,picture"


@app.route('/', methods=['GET'])
def index():
    return render_template('homepage.html')

@app.route('/time')
def time():
    try:
        url = "https://randomuser.me/api/?results=10&inc=name,email,picture"
        
      
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        response = requests.get(url, headers=headers, timeout=10) 
        
        response.raise_for_status() 
        
        data = response.json()
        curadores_data = data.get('results', [])
        
        return render_template('time.html', curadores_data=curadores_data)

    except requests.exceptions.HTTPError as e:
        print(f"Erro HTTP ao obter dados da API: {e}")
        return render_template('time.html', 
                               curadores_data=[], 
                               error_message=f"Erro ao obter dados da API: {e}.")

    except requests.exceptions.RequestException as e:
        print(f"Erro de conexão: {e}")
        return render_template('time.html', 
                               curadores_data=[], 
                               error_message="Desculpe, falha na conexão com a API. Tente novamente mais tarde.")
    
    except Exception as e:
        print(f"Erro inesperado no /time: {e}")
        return render_template('time.html', 
                               curadores_data=[], 
                               error_message="Erro interno ao processar dados.")