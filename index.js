import mongoose from "mongoose";
import app from "./app.js"

(async () => {
    try {
        
     await mongoose.connect("mongodb://localhost:27207/Thebase")
     console.log("DB CONNECTED");

    const onlistening = () => (
        console.log("listening on port 5000")
    )
     app.listen(5000, onlistening) 

    } catch (error) {
        console.error("error:" , error)
        throw err;
    }


})()
