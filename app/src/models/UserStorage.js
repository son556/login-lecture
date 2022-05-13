"use strict";

const fs = require("fs").promises;
// promise는 약속이라는 의미로 promise가 수행하는 동작이 끝남과 동시에 상태를 알려주기 때문에 비동기 처리에 아주 효과적 이다.

class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = usersKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});
    
        return userInfo;
    }
    // #변수 -> 변수를 public 에서 private 변수로 바꿔줌 (외부에서 접근을 못하도록 함) ex) static #users
    static getUsers(...fields) {// static -> class 자체에서 변수를 받아올 때 정적 변수로 만들어야 가져올 수 있음
        // const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsersInfo(id) {
        return fs
        .readFile("./src/databases/users.json")//promise 반환시 .than 접근 가능
        .then((data) => {
            return this.#getUserInfo(data, id);

        })
        .catch(console.error); //promise error 처리   
    }

    

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true};
    }
}

module.exports = UserStorage;