import mongoose from 'mongoose'

const uri: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/task-manager';


export default uri;
