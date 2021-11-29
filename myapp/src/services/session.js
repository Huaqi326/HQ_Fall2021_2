import { isEmpty, update } from "lodash";
import router from "../router";
import { Signin, Add, GetByHandle, Update } from "./users";

const session = {
    user: null,
    messages: [],       // {text: string, type: string }
    toRoute: '/main',
    async Signin(email, password){

        try {
            const response = await Signin(email, password);

            this.user = response.user;
    
            router.push(this.toRoute);
                
        } catch (error) {
            this.Error(error);
        }
    },
    async Signup(user) {
        const response = await GetByHandle(user.handle);
        if(isEmpty(response)) {
            await Add(user);
            router.push('/signin');
        }else{
            alert("This email address already registered")
        }
    },
    async Update(user_id, user) {
        await Update(user_id, user);
    },
    Error(error){
        console.error(error);
        let msg;
        if(msg = error.msg)
            alert(msg);
    }
};

export default session;

//export function