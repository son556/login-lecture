"use strict";


class UserStorage {
     static #users = {// static -> class 자체에서 변수를 받아올 때 정적 변수로 만들어야 가져올 수 있음
        // #변수 -> 변수를 public 에서 private 변수로 바꿔줌 (외부에서 접근을 못하도록 함)
        id : ["woorimIT", "나개발", "김팀장"],
        psword : ["1234", "1234", "123456"],
        name : ["우리밋", "나개발", "김팀장"],
    };
    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;