// npm packages
import mongoose from 'mongoose'

// my packages
import { dbConfig as db } from '../../config'

export const connect = next => mongoose.connect(db.target, db.options, next)