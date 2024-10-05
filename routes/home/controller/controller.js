"use strict"
// 컨트롤러 모듈화


// HTML문서로 코딩한 내용을 res(respond).send 하여 보냄: HTML하드코딩
// View를 사용한 render링: ejs파일에 있는 HTML코드를 res.render를 통해 불러옴

const home = (req, res)=>{
    res.render("home/index")
};

const login = (req, res)=>{
    res.render("home/login")
};

module.exports ={
    home,
    login,
};
