"use strict";
// 라우터: 클라이언트의 요청을 연결해주는 부분
// import express from "express";
let express = require("express");
let router = express.Router();

// controller 받아오기. ctrl 변수로 받아와서 사용
const ctrl =require("./controller/controller")

//  라우팅할 내용 가져오기.
// ejs 엔진을 이용한 View를 불러오는 코드, app.js를 통해 view를 제공해주는 코드
// app.get => router.get으로 변경하여 라우터 동작이 되도록함
router.get("/", ctrl.home);
router.get("/login", ctrl.login);

// 위 get과 render는 이 index.js 내에서만 작동이 되기 때문에 이모듈(router)를 외부로 던짐(exports)
module.exports = router;