import Form from '../views/pages/form';
import Home from '../views/pages/home';
import Post from '../views/pages/post';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/post': Post,
  '/form': Form,
};

export default routes;
