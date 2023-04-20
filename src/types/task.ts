
// Import Mongoose and its types
import { Document } from 'mongoose';

export interface ITask extends Document {
name: string;
description: string;
status: boolean;
}