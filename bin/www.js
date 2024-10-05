"use strict"


const app = require("../app")

// 주소: 3010+"/login" res: "Login page"를 넘겨줌

// 서버띄우기, 주소 = 3010
// 주소 =3010 에서 PORT 변수로 설정하여 두는게 좋음, 맨위에 변수로 설정

let PORT = 3010;


app.listen(PORT,() => {
    console.log("서버가동")
}); 