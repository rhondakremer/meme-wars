import axios from 'axios';
// import { resolve } from 'dns';
// import { rejects } from 'assert';

export default {

    login:function(email, password)
    {
        return axios.post("/api/user/login", {
            email,
            password
        })
    },

    register:function(name, email, password, image)
    {
            return axios.post("/api/user", {
                name,
                email,
                password,
                image
            });
    },

    getUsers:function()
    {
        return axios.get("/api/user")
        // new Promise((resolve, reject)=>{

        //     resolve({
        //         name: "fuck"
        //     })
        // })
    },

    getOne: function(id) {
        return axios.get("api/user/" + id)
    }
}