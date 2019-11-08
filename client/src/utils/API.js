import axios from 'axios';

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
            }),
              
            new Promise((resolve, reject)=>{

                    resolve({
                        name,
                        email
                    })
                })
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