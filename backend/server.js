import express from "express"
import mongoose from "mongoose"
import  "dotenv/config"
import signupRoutes from "./routes/auth.js"
import loginRoutes from "./routes/auth.js"

const port = process.env.PORT
const app = express();
app.use(express.json());

try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB is connected")
} catch (error) {
    console.error("MongoDb connection failed",error);
    process.exit();
    
}

app.use("/api/signup", signupRoutes)
app.use("/api/login", loginRoutes)


app.listen(port, ()=>{
    console.log("server running on port 3001")
})