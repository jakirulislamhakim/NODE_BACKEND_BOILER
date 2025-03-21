import { Router } from 'express';
import AuthRoutes from '../modules/auth/auth.route';
import UserRoutes from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const ModulesRoutes = router;
