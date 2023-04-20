import {Response, Request} from 'express';
import {ITask} from '../types/task';
import Task from '../model/task';

//  Get all tasks
const getTasks = async(req: Request, res: Response): Promise<void> => {
 try {
    const tasks: ITask[] = await Task.find();
    res.status(200).json({tasks})
 } catch (error) {
    throw error
 }
}

// Add Task
const addTask = async(req: Request, res: Response): Promise<void> => {
    try {
    const body = req.body as Pick<ITask, 'name' | 'description' | 'status'>
    const task: ITask =  new  Task({
        name: body.name,
        description: body.description,
        status: body.status
    })
    const newTask: ITask =  await task.save()
    const allTask: ITask[] = await Task.find();
    res.json({
      status:201,
      message:'Task added',
      successful:true,
      task: newTask, 
      tasks: allTask
    });
    } catch (error) {
      res.json({
         status:401,
         message:' no Task added',
         successful:true,
         task: null, 
         tasks: null
       })
    }
}

// Update Task
const updateTask =  async(req: Request, res: Response): Promise<void> => {
    try {
       const {
        params: {id},
        body,
       }  = req;
       const updateTask: ITask | null = await Task.findOneAndUpdate(
        {_id: id},
        body
       )
       const allTasks: ITask[] = await Task.find();
       res.status(200).json({message: 'Task updated', task: updateTask, tasks: allTasks })
    } catch (error) {
      throw error  
    }
}

// delete Task
const deleteTask  = async (req: Request, res: Response): Promise<void> => {
 try {
    const deletedTask: ITask | null = await Task.findByIdAndRemove(req.params.id);
    const allTasks = await Task.find();
    res.status(200).json({message: 'Task deleted', task: deletedTask, tasks: allTasks})
 } catch (error) {
    throw error
 }
}


export {getTasks, addTask, updateTask, deleteTask}