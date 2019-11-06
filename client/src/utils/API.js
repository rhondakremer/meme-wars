export default {

    login:function(email, password)
    {
        return new Promise((resolve, reject)=>{
            resolve({id:1, token:"user"});
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