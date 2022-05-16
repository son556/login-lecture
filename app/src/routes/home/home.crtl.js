"use strict";
const User = require("../../models/User.js");
const UserStorage = require("../../models/UserStorage.js");
const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    test: (req, res) => {
        res.write("hello world!");
        res.end();
    },
    register: (req, res) => {
        res.render("home/register");
    }
};



const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);

    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    }
};


module.exports = {
    output,
    process,
};


//위의 module.exports 는 아래의 식과 같다.
// module.exports = {
//     hello : hello,
//     login : login,
// }
