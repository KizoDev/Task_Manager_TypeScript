import {ITask} from '../types/task';
import {model, Schema} from 'mongoose';

const taskSchema = new Schema ({
name:{
type: String,
required: true
},
description: {
type: String,
required: true
},
status: {
type: Boolean,
required: true
}
},
{timestamps: true}
)
export default model('Task', taskSchema);
