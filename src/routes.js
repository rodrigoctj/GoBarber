import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  console.log(7);
  const user = await User.create({
    name: 'Rodrigo Junior',
    email: 'rodrigoctj@gmail.com',
    password_hash: '123123132',
  });
  console.log(8);
  return res.json(user);
});

export default routes;
