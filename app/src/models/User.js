"use strict";

const UserStorage = require("./UserStorage");
class User{
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        try {
        const {id, psword} = await UserStorage.getUsersInfo(client.id);
        //await 은 promise를 반환하는 것들 만 사용 가능 await은 async함수 안에서만 사용 가능 async(비동기 함수)
        if (id) {
            if (id === client.id && psword === client.psword){
                return {success : true}
            }
            return {success : false, msg: "비밀번호가 틀렸습니다."};
        }
        return {success : false, msg: "존재하지 않는 아이디입니다."};
        } catch(err) {
            return {success: false, msg: err};
        }
    }

    async register() {
        const client = this.body;
        try {
        const response = await UserStorage.save(client);
        return response;
        } catch (err) {
            const a = { success: false, msg: err };
            console.log(a.msg);
            return a;
        }
        
    }

}

module.exports = User;