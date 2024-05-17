import User from "../model/User.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"

export const signup = async(req,res,next)=>{
    const {username,email,password,firstName,lastName} = req.body;

    if(!username || !email || !firstName === "" || !lastName === "" || password === ""){
        next(errorHandler(400, "All the fields are required"));
    }

    const hashedPassword = bcrypt.hashSync(password,10);

    const newUser = new User({username,firstName,lastName,email,password:hashedPassword});

    try {
        await newUser.save();
        res.json({message:"registration successful", newUser});
    } catch (error) {
        next(error)
    }
};

export const login  = async(req,res,next) =>{
    const {email,password} = req.body;
    if(!email || !password || email === "" || password === ""){
        next(errorHandler(400, "All field are required"));
    }
    try {
        const validUser = await User.findOne({email});
            if(!validUser){
                return next(errorHandler(400, "User not found"));
            }
            const validPassword = bcrypt.compareSync(password, validUser.password);
            if(!validPassword){
                return next(errorHandler(400, "Invalid password"));
            }
            const token = jwt.sign({id: validUser._id,isAdmin: validUser.isAdmin}, process.env.JWT_SECRET,{expiresIn: '1d'})

            const {password: pass,...rest} = validUser._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true
            }).json({message: "successfully signed in", user:rest});

        
    } catch (error) {
        next(error)
    }
}