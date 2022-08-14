const express = require("express");
const users = require("../model/userSchema");
const router = express.Router();


// router.get("/",(request,response)=>{

// })

router.post("/addcontact", async (request,response) => {
    const {firstname,lastname,email,contactnumber,technology} = request.body;

    if( !firstname || !lastname || !email || !contactnumber || !technology){
        
        response.status(422).json("Please fill all input fields")
    }
    try {
        const isExist = await users.findOne({email:email})
        console.log(isExist)
        if(isExist){
            response.status(422).json("Email already Exists!")
        } else {
            const model = new users({
                firstname,lastname,email,contactnumber,technology
            })

            await model.save();
            response.status(201).json(model);
        }
        
    } catch (error) {
        response.status(422).json(error)
    }

})
router.patch("/updatecontact/:id", async (request,response) => {
    const {firstname,lastname,email,contactnumber,technology} = request.body;

    if( !firstname || !lastname || !email || !contactnumber || !technology){
        
        response.status(422).json("Please fill all input fields")
    }
    try {
        
        const {id} = request.params
        const data = await users.findByIdAndUpdate(id,request.body,{new:true});
        response.status(201).json(data);
        
    } catch (error) {
        response.status(422).json(error)
    }

})
router.delete("/deletecontact/:id", async (request,response) => {
    try {
        
        const {id} = request.params
        const data = await users.findByIdAndDelete({_id:id});
        response.status(201).json(data);
        
    } catch (error) {
        response.status(422).json(error)
    }

})


router.get("/getusers",async (request,response) => {

    try {
        const userdata = await users.find();
        response.status(201).json(userdata);
    } catch (error) {
        response.status(422).json(error)
    }

})
router.get("/getuser/:id",async (request,response) => {
    
    try {
        const {id} = request.params
        const userdata = await users.findById({_id:id});
        response.status(201).json(userdata);
    } catch (error) {
        response.status(422).json(error)
    }

})

module.exports = router;