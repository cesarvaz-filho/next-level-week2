import express from 'express';
import ClassesController from './controllers/ClassesController'
import ConnectiosController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController= new ClassesController();
const connectionsController = new ConnectiosController;

//Corpo (Request Body): dados para criação ou atualização de um registro
//Route Params: identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação



routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;