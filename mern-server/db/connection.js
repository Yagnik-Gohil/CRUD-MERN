const mongoose = require("mongoose");
const DB = "mongodb+srv://yagnik:Sr917aayRFaCJFZ6@cluster0.obtvghn.mongodb.net/MernCrudDb?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("start")
}).catch((e)=> {
    console.log(e.message)
})