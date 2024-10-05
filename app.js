// 작성해주는게 좋음 문법을 중시하겠다 라는 뜻
"use strict";

// 모듈
//  터미널에 npm install express --save : express 설치.
// node app.js로 서버 연결 ctrl+c로 연결 끊기, 동기화가 중요
let express = require("express");
let app = express();

// 라우팅 : 라우팅 파일의 (폴더)주소 설정
let home = require("./routes/home");


// 앱세팅
// HTML로 작성한 화면 뷰를 처리 해주기 위함
// HTML코드를 어떤 엔진으로 해석할 것인가? : ejs
// npm install ejs -s : ejs 모듈 설치해야 작동이 됨
app.set("views", "./views");
app.set("view engine", "ejs")


app.use("/", home); // use => 미들웨어를 등록해주는 매서드. router에서 던진 파일을 가져옴



// www
module.exports = app;

// npm init -y : init = 초기화, -y(yes)를 입력함으로써 기본값 설정, package.json 설치