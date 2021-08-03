<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Item PJ - 아이템 페이지</title>
    <link rel="stylesheet" href="css/item.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script src="js/item.js"></script>
</head>
<body>
    <!-- 전체박스 -->
    <div class="wrap ibx">
        <!-- 1.상단영역 -->
        <header id="top">
            <!-- 1-1. 로고 -->
            <h1 class="tit">
                <a href="index.html">
                    <!-- 글자 -->
                    <img src="images/mlogo_7.png" alt="my item" id="mytit">
                    <!-- 빨간공 -->
                    <img src="images/mlogo_6.png" alt="빨간공" id="rball">
                    <!-- 카멜레온박스 -->
                    <div id="cambx">
                        <!-- 혀박스 -->
                        <span id="tung"></span>
                        <!-- 카멜레온 -->
                        <img src="images/mlogo_05.png" alt="카멜레온" id="cam">
                    </div>
                </a>
            </h1>
            <!-- 1-2. GNB메뉴 -->
            <nav class="gnb">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">디바이스</a>
                        <!-- 서브메뉴 -->
                        <ol class="smenu">
                            <li>
                                <a href="#">스마트폰</a>
                            </li>
                            <li>
                                <a href="#">태블릿PC</a>
                            </li>
                            <li>
                                <a href="#">노트북</a>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <a href="#">패션</a>
                        <!-- 서브메뉴 -->
                        <ol class="smenu">
                            <li>
                                <a href="#">가방</a>
                            </li>
                            <li>
                                <a href="#">시계</a>
                            </li>
                            <li>
                                <a href="#">구두</a>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <a href="#">프로필</a>
                    </li>
                </ul>
            </nav>
            <!-- 1-3. 공통메뉴 -->
            <ul class="tmenu">
                <li>
                    <a href="#">회원가입</a>
                </li>
                <li>
                    <a href="#">로그인</a>
                </li>
                <li>
                    <a href="#">게시판</a>
                </li>
                <li>
                    <a href="#">오시는길</a>
                </li>
            </ul>
            <!-- 1-4.sns메뉴 -->
            <ul class="sns">
                <li>
                    <a href="#">
                        <span class="ir">트위터바로가기</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="ir">인스타그램바로가기</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="ir">페이스북바로가기</span>
                    </a>
                </li>
            </ul>
        </header>
        <!-- 2.컨텐츠영역 -->
        <main id="cont">
            <!-- 2-1.아이템 타이틀 -->
            <h2 class="stit"></h2>
            <!-- 2-2.아이템 컨텐츠 박스 -->
            <div class="itbx">
                <!-- 2-2-1.이미지박스 -->
                <figure class="imbx"></figure>
                <!-- 2-2-2.설명박스 -->
                <p class="dcbx"></p>
            </div>
        </main>
        <!-- 3.하단영역 -->
        <footer id="info">
            <!-- 3-1.하단로고 -->
            <img src="images/b_logo.png" alt="하단로고">
            <!-- 3-2.회사주소 -->
            <address>
                서울시 강남구 논현동 32-45  대량빌딩 1455호, 대표: 김랑랑
            </address>

        </footer>
    </div>
    
</body>
</html>