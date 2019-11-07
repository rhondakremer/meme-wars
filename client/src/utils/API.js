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