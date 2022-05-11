"use strict";

const hello = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports ={
    hello,
    login,
};

//위으 module.exports 는 아래의 식과 같다.
// module.exports = {
//     hello : hello,
//     login : login,
// }