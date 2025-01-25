const port = 4000;
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const cors  = require('cors')

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));

mongoose.connect("mongodb+srv://rishiiiishah:2cdm8YZ5XQv0nfij@cluster0.9qrmj2b.mongodb.net/choco");

app.get("/", (req, res) => {
    res.send("express app is running")
})

const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    }
})

app.get('/logout',async(req,res)=>{
    res.clearCookie('token',{
        httpOnly:true,
    })
})

app.post('/signup', async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "existing user found" });
    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    await user.save();
    const data = {
        user: {
            id: user.id
        }
    };
    const token = jwt.sign(data, "sercret_choco");
    res.cookie('token', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        secure: true,
        sameSite: "Strict"
    }).json({ success: true });
})

app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }

            const token = jwt.sign(data, "sercret_choco");
            return res.cookie('token', token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
                secure: true,
                sameSite: "Strict"
            }).json({ success: true });
        } else {
            return res.json({ success: false, errors: "Wrong password" });
        }
    } else {
        return res.json({ success: false, errors: "Wrong emailid" });
    }
})

app.listen(port, (error) => {
    if (!error) {
        console.log("server running on port " + port)
    } else {
        console.log("error: " + error)
    }
})
