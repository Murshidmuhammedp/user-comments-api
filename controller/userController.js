import User from "../models/userSchema.js";

export const Userregister = (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            return res.status(404).json({ message: 'Username Not provided' })
        }

        const newUser = new User({
            name,
        })
        newUser.save();
        return res.status(200).json({ message: "User Register Successfully" });

    } catch (error) {
        console.error(error);
    }
}