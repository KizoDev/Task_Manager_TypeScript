
import { Router } from 'express';
import {
    getTasks, 
    addTask, 
    updateTask, 
    deleteTask
} from '../controllers/task';

const router : Router = Router();

router.get('/tasks',getTasks );
router.post('/addtask', addTask);
router.put('/edittask/:id', updateTask);
router.delete('/deletetask/:id', deleteTask);

export default router;