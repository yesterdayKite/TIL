import requests

url = "https://www.python.org/"
resp = requests.get(url) # get요청을 보내고, 서버가 응답한 내용을 resp에 저장

html = resp.text # 응답객체는 headers, cookies, text등 여러 속성을 가진다. html소스코드를  변수에 저장한다.
print(html)