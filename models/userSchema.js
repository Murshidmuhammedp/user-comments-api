import mongoose from "mongoose";

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

const User = mongoose.model("User", user);

export default User;