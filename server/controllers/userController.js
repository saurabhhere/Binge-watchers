const jwt = require('jsonwebtoken');
const {OAuth2Client} = require('google-auth-library');
const User = require('../models/user-model');
const keys = require('../config/keys')

const client = new OAuth2Client(`${keys.google.clientID}`);

exports.googlelogin = async (req, res) => {
    try {
        const {tokenId} = req.body;
        client.verifyIdToken({idToken: tokenId, audience: "219361512053-uf12ir4ud6vj85m1c1ves53him0nggjf.apps.googleusercontent.com"})
        .then(async (response) => {
            const {email_verified, name, email, at_hash} = response.payload;
            if (email_verified){
                const user = await User.findOne({ email: email });
                if (user) {
                    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: '7d'});
                    res.json({
                    token, 
                    user: {
                        id: user._id,
                        username: user.username,
                        email: user.email
                    }
                    })
                } else {
                    const newUser = new User({
                        username: name,
                        email: email,
                    });
                    const savedUser = await newUser.save();
                    const token = await jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {expiresIn: '7d'});
                    res.status(200).json({
                        token, 
                        user: {
                        id: savedUser._id,
                        username: savedUser.username,
                        email: savedUser.email
                    }
                    })
                }
        }
    })
    } catch (error) {
        res.status(500).json({error: error.message});
        
    }
}

exports.getUser = async(req, res) => {
    const user = await User.findById(req.user);
    if (user) {
        res.json({
            username: user.username,
            id: user._id
        })
    }
    res.json()
}

exports.checkToken = async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) {
            return res.json(false);
        }
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}