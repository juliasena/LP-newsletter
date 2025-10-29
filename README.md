# ☕ Teste Técnico Front-end & Python: Data&Café - Landing Page

Este projeto é a entrega do Teste Prático para a vaga de Desenvolvedor Front-end, focado na criação de uma Landing Page (LP) responsiva, integrada com um micro-serviço em Python (Flask) para simular o consumo de dados reais.

## 🚀 Acesso ao Projeto

| :--- | :--- |
| **URL do Projeto (Hospedado)** | [COLE AQUI O LINK DO SEU PROJETO ()] |

---

## 🛠️ Tecnologias Utilizadas

A escolha das tecnologias foi determinada pelos requisitos do teste técnico e pela necessidade de integrar o Front-end com um serviço de *templating* dinâmico.

* **HTML5 & Jinja2:** Estrutura semântica e *templating* do Jinja2 para renderização de dados dinâmicos (consumidos pela API) e herança de templates.
* **CSS3:** Estilização completa, seguindo a abordagem **Mobile First** e implementando responsividade para Tablet e Desktop através de *media queries*.
* **JavaScript (ES6):** Manipulação do DOM para a funcionalidade de menu mobile (hambúrguer)..
* **Python (Flask) & Requests:** Framework utilizado para roteamento da aplicação, consumo de API externa (simulada) via `requests`, e entrega dos dados para os templates.
* **API Externa:** Utilização da API `https://randomuser.me/api/` para popular dinamicamente a seção "Time" com dados de curadores fictícios.

---

## 🎯 Sobre a Landing Page (Contexto Fictício)

A Landing Page **Data&Café** é um projeto de demonstração que simula uma newsletter focada em Inteligência Artificial.

**Observação Importante:**
Todo o conteúdo textual, a identidade visual e o tema "Data&Café" são **fictícios** e foram criados apenas para cumprir os requisitos de desenvolvimento Front-end e o uso de ferramentas de *templating* e API.

---

## ⚙️ Como Executar o Projeto Localmente

Para rodar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [SEU LINK DO REPO AQUI]
    cd [NOME-DO-SEU-REPOSITORIO]
    ```

2.  **Crie e Ative o Ambiente Virtual (Recomendado):**
    ```bash
    python -m venv venv
    source venv/bin/activate  # No Windows: venv\Scripts\activate
    ```

3.  **Instale as Dependências:**
    ```bash
    pip install Flask requests
    ```

4.  **Execute a Aplicação Flask:**
    ```bash
    export FLASK_APP=[SEU_ARQUIVO_PYTHON_PRINCIPAL].py # Ex: app.py
    flask run
    ```

5.  **Acesse:**
    Abra seu navegador e acesse `http://127.0.0.1:5000/`.

---
Qualquer dúvida, entre em contato 🌸
**Contato:** [juliasena19@gmail.com]