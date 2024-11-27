import mongoose from "mongoose";
import Comment from "../models/commentSchema.js";
import User from "../models/userSchema.js";

export const comment = async (req, res) => {

    try {
        const id = req.params.id

        const user = await User.findById(id)
        const { comment } = req.body;

        if (!comment) {
            return res.status(404).json({ message: "Comment Field is empty" });
        }

        const newComment = new Comment({
            comment: comment,
            userId: id
        })

        newComment.save()
        user.comment.push(newComment._id);
        user.save()

        return res.status(200).json({ message: "SuccessFully" });
    } catch (error) {
        console.error(error)
    }
}

export const getComment = async (req, res) => {
    try {
        const id = req.params.id

        // const comment = await User.findById(id)
        //     .populate({
        //         path: 'comment'
        //     })

        const comment = await User.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(id) },
            },
            {
                $lookup: {
                    from: "comments",
                    localField: "comment",
                    foreignField: "_id",
                    as: "commentDetails"
                }
            },
        ])

        if (!comment || comment.length == 0) {
            return res.status(400).json({ message: "No comment Found" })
        }
        return res.status(202).json({ Data: comment })

    } catch (error) {
        console.error(error);
    }
}