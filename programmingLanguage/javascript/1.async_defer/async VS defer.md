## 자바스크립트의 공식사이트는 ?
developer.mozilla.org
공식 사이트를 통해서 공부하는 습관을 들입시다!


## asyc VS defer
* 브라우저는 html을 한줄한줄씩 parsing하여 읽는다.
<head>
<script src="main.js"></script>
</head>
를 읽으면, 어! 이게 필요하네! 하고 parsing을 잠시 멈추고 main.js 를 서버에서 다운로드 받아서, 이걸 실행한 다음 그다음 라인을 parsing 한다.

* 이렇게 했을때의 단점은?
 처음부터 끝까지 다 읽고 페이지를 로딩하기 때문에 크기/구조에 따라 느려질 수 있다.

* 그래서 body 안에 넣어버리면?
<body>
	<script src="main.js"></script>
</body>
parsing HTML => page is ready => fetching js -> executing js => page is ready!

* head+async
<head>
<script async src="main.js"></script>
</head>

브라우저가 HTML을 parsing함과 동시에 병렬로 JS fetching을 진행 -> executing JS -> parsing HTML => page is ready!
BUT, HTML이 우리가 원하는 요소가 아직 정의되어있지 않을 수 있어 위험하다.

* head+defer <- BEST !
<head>
<script defer src="main.js"></script>
</head>

parsing HTML하는 도중에 fetching JS 진행 -> page is ready -> executing JS

그러므로 defer을 사용하는게 가장 효율적이고 안전하다.
