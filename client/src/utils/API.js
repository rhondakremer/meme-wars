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
            new Promise(( resolve, reject) => {
                resolve ({name,
                email})
            })
    },

    getUser:function()
    {
        // return axios.get("/api/user").
        return new Promise((resolve, reject)=>{

            resolve({
                name: "Rhonda Kremer"
            })
        })
    }
}