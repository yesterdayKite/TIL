# 로봇배제표준 : '웹사이트에 로봇이 접근하는 것을 방지하기 위한 규약'
# 일반적으로 접근 제한에 대한 설명을 루트디렉토리에 robots.txt에 기술한다. (python.org/robots.txt)
# 웹사이트에 접근하기 전에 반드시 로봇 배제 표준을 확ㅇ니하고 가이드라인 준수해야한다.

# 모든 로봇에게 루트 디렉터리 이하 모든 문서에 대한 접근을 허락
# User-agent:*
# Allow : /

# 모든 로봇에게 루트 디렉터리 이하 모든 문서에 대한 접근을 차단
# User-agent : *
# Disallow : /

# 모든 로봇에게 특정 디렉터리(/temp/)에 대한 접근을 차단
# User-agent : *
# Disallow : /temp/

# 특정한 로봇 (googlebot)에게 모든 문서에 대한 접근을 차단
# User-agent : googlebot
# Disallow : /

import requests

urls = ["https://www.naver.com/", "https://www.python.org/"]
filename = "robots.txt"

for url in urls :
    file_path = url+filename
    print(file_path)
    resp = requests.get(file_path) #해당 url의 robots.txt로 get요청 보낸다.
    print(resp.text) # 응답 객체의 html 소
    print()


