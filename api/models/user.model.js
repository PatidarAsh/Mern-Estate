import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,
        default: "https://imgs.search.brave.com/iFhMeSmoMs-8hXEoKOzpFoTCNJTjK1jvgmqYSvYhPj8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy9wcm9m/aWxlLWltYWdlLWlj/b24vcHJvZmlsZS1p/bWFnZS1pY29uLTI4/LmpwZw"
    },

}, {timestamps: true}
)

const User = mongoose.model('User', userSchema);

export default User;