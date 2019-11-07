import axios from 'axios';

export default {

    login:function(email, password)
    {
        return new Promise((resolve, reject)=>{
            resolve({id:1, token:"user", name:"Rhonda Kremer"});
        })
    },

    register:function(name, email, password, image)
    {
            return axios.post("/api/user", {
                name,
                email,
                password,
                image
            })
    },

    getUser:function()
    {
        return new Promise((resolve, reject)=>{

            resolve({
                name: "Rhonda Kremer"
            })
        })
    }
}