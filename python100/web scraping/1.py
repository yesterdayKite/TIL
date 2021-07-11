
#               ==request==>
# 사용자 (웹브라우저)               웹서버
#               <==response==


import requests #pip install requests

url = "https://www.python.org/"
resp = requests.get(url)    #웹서버에 get 요청 보내고, 웹서버가 응답한 내용을 resp에 저장
print(resp)                 # 200이 나오고, '정상'을 뜻하는 응답코드.

url2 = "https://www.python.org/1" #유효하지 않은 웹페이지 주소
resp2 = requests.get(url2)  #웹서버에 get 요청 보내고, 웹서버가 응답한 내용을 resp에 저장
print(resp2)                #'해당페이지 찾을수 없다'는 에러코드인 404



