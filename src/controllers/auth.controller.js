import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAcessToken } from '../libs/jwt.js'

export const register = async (req, res) => {
    const { email, password, username } = req.body
    try {

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordHash
        })

        const userSaved = await newUser.save()
        const token = await createAcessToken({id: userSaved._id})
        
        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updateAt: userSaved.updatedAt
        })
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {

        const userFound = await User.findOne({email})

        if(!userFound) return res.status(400).json({message: "User not found"})

        const isMatch = await bcrypt.compare(password, userFound.password)

        if(!isMatch) return res.status(400).json({message: "Incorrect password"})

        const token = await createAcessToken({id: userFound._id})
        
        res.cookie('token', token)
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updateAt: userFound.updatedAt
        })
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}


export const logout = (req, res) => {

    res.cookie('token', "", {
        expires: new Date(0)
    })

    return res.sendStatus(200)

}


export const profile = async (req, res) => {
    try {
        const userFound = await User.findById(req.user.id);
        if (!userFound) {
            return res.status(400).json({
                message: "User not found",
            });
        }

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        });
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
