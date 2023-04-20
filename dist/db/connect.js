"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/task-manager';
exports.default = uri;
