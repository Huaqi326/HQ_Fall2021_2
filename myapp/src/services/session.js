import router from "../router/index";

const session = {
    user: null,
    toRoute: '/main',
    Signin(email, password){
        if(email !== 'zhangh8@1'){
            throw { code: 400, msg: "Sorry, there is no match email(zhangh8@1)" }
        }
        if(email === 'zhangh8@1'){
            if(password !== '123'){
                throw { code: 400, msg: "Password is not correct(123)" }
            }
        }
        if(email === 'zhangh8@1' && password === '123') {
            this.user = "Huaqi";
           router.push(this.toRoute); 
        }
    }
};

export default session;