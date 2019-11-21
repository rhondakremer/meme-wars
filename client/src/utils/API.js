import axios from 'axios';
// import { resolve } from 'dns';
// import { rejects } from 'assert';

export default {
    downloadImage:function(url){
        return axios.get(url,{
            responseType: 'arraybuffer' 
        });
    },
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
    },
    saveMeme: function(baseImgURL, topText, topY, topX, bottomText, bottomY, bottomX, createdBy, imageOf)
    {
        return axios.post("/api/meme", {
            baseImgURL,
            topText,
            topY,
            topX,
            bottomText,
            bottomY,
            bottomX,
            createdBy,
            imageOf
        })
    },
    startBattle: function(id, createdBy, imageOf) {
        return axios.post("/api/feed", {
            id,
            createdBy,
            imageOf
        })
    },
    
    getMemes: function(id){
        return axios.get("/api/meme/?createdBy=" + id)
    },

    getMemeById: function(id){
        return axios.get("/api/meme/?_id=" + id)
    },

    getUserFromImage: function(id) {
        // console.log("hey i am here in api.js", id)
        return axios.get(`/api/user/${id}`)
    },
    getBattles: function() {
        return axios.get("/api/feed")
    },
    getMemesOfMe: function(imageOf) {
        // console.log("this is getmemesofme in api.js", imageOf)
        return axios.get('/api/meme/?imageOf=' + imageOf)
    },
    getMyChallenges: function(id) {
        // console.log("getting challenges" , id)
        return axios.get("/api/feed/?meme2Challenger=" + id + "&meme2=")
    },
    respondToChallenge: function(id, meme2) {
        // console.log("Are we in api.js?", id, meme2)
        return axios.put("/api/feed/" + id, meme2)
    },
    add1Point: function(index, key) {
        // console.log("Are we in api.js?", id, meme2)
        return axios.put("/api/feed/" + index, key)
    }
}