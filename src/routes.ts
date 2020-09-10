import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';

const router = Router();

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.get('/users', (request, response) => {
  return response.json({ users: [] });
});

export { router };
