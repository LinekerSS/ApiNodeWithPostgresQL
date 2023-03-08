const express = require('express');
const routes = express.Router()
import User from './app/models/User'
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import TaskController from './app/controllers/TaskController';

routes.get('/teste', async (req, res) => {
    const user = await User.create({
        name: 'Lineker',
        email: 'lineker_ss@outlook.com',
        password_hash: '123456'
    })
    return res.json(user)
})

routes.post('/users', UserController.store)

// Todas as rotas abaixo deste middleware precisa estar autenticadas

routes.post('/sessions', SessionController.store)
routes.use(authMiddleware)

routes.put('/users', UserController.update)
routes.post('/tasks', TaskController.store)
routes.get('/tasks', TaskController.index)
routes.put('/tasks/:task_id', TaskController.update)
routes.delete('/tasks/:task_id', TaskController.delete)


export default routes;