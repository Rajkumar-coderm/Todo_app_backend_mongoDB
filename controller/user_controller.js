const User = require('../models/user')
const { authenticateToken, generateAccessToken } = require('../middlewear/jwt')
const bcrypt = require('bcrypt')
exports.login = async (req, res) => {
    try {
        const data = await User.find({ email: req.body.email })
        console.log(data[0]._id);
        if (data[0].email) {
            if (data[0].email === req.body.email) {
                if (bcrypt.compareSync(req.body.password, data[0].password)) {
                    const token = generateAccessToken({id:data[0]._id})
                    res.cookie("token", token).status(200).send({ message: "login successfully " })
                } else {
                    res.status(404).send({ message: "incorrect Password" })
                }
            } else {
                res.status(404).send({ message: "incorrect Email..." })
            }
        } else {
            res.send("not valid")
        }

    } catch (error) {
        console.log(error);
    }
}

exports.signup = async (req, res) => {
    try {
        if (req.body.email === undefined || req.body.password === undefined) {
            res.status(403).json({ message: "email or password undifinde" })
        }
        const password = await bcrypt.hash(req.body.password, 10)
        const user = {
            email: req.body.email,
            password: password
        }
        await User.insertMany(user)
            .then((data) => {
                res.status(200).json({ message: "singnup sccess" })
            }).catch((err) => {
                res.status(500).send({ message: err.message })
            });
    } catch (error) {
        console.log(error);
    }
}