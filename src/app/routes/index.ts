import express from 'express';
import { UserRouter } from '../modules/users/users.routes';
import { CategoryRoutes } from '../modules/category/controller.routes';
import { BookRoutes } from '../modules/book/book.routes';


const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/",
    route: UserRouter
  }
  ,
  {
    path: '/categories',
    route: CategoryRoutes
  }
  ,
  {
    path: '/books',
    route: BookRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
