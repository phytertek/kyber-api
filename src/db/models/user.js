import mongoose, {Schema} from 'mongoose'

const UserSchema = new Schema({
  _fbid: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  email: String
})

export const User = mongoose.model('User', UserSchema)