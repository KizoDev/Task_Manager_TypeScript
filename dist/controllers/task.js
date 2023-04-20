"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.addTask = exports.getTasks = void 0;
const task_1 = __importDefault(require("../model/task"));
//  Get all tasks
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield task_1.default.find();
        res.status(200).json({ tasks });
    }
    catch (error) {
        throw error;
    }
});
exports.getTasks = getTasks;
// Add Task
const addTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const task = new task_1.default({
            name: body.name,
            description: body.description,
            status: body.status
        });
        const newTask = yield task.save();
        const allTask = yield task_1.default.find();
        res.json({
            status: 201,
            message: 'Task added',
            successful: true,
            task: newTask,
            tasks: allTask
        });
    }
    catch (error) {
        res.json({
            status: 201,
            message: ' no Task added',
            successful: true,
            task: null,
            tasks: null
        });
    }
});
exports.addTask = addTask;
// Update Task
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateTask = yield task_1.default.findOneAndUpdate({ _id: id }, body);
        const allTasks = yield task_1.default.find();
        res.status(200).json({ message: 'Task updated', task: updateTask, tasks: allTasks });
    }
    catch (error) {
        throw error;
    }
});
exports.updateTask = updateTask;
// delete Task
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTask = yield task_1.default.findByIdAndRemove(req.params.id);
        const allTasks = yield task_1.default.find();
        res.status(200).json({ message: 'Task deleted', task: deletedTask, tasks: allTasks });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteTask = deleteTask;
