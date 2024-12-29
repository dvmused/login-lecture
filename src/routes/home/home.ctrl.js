"use strict";
//ECMA스크립트 문법
const home = (req, res) => {
    res.render("home/index")
};

const login = (req, res) => {
    res.render("home/login");
}
/*
위 문법과 같은 것임
function hello(req, res) {
    res.render("home/index");
}
*/

module.exports = {
    home,
    login
}
/*
{ key : value }
key만 입력해주면 key와 같은 value를 자동으로 넣어주게됨.
*/

