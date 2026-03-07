import mongoose, {Schema} from "mongoose";
import mongooseeAggregatePaginate from "mongoose-aggregate-paginate-v2"
import bcrypt from "bcryptjs";

const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: true

    }, 
    thumbnail: {
        type: String,
        required: true,
    }, 
    description: {
         type: String,
        required: true
    },
    duration: {
         type: Number,
        default: 0 ,
    }, 
    views: {
         type: Number,
        default: 0 ,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})

videoSchema.plugin(mongooseeAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)