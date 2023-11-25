import Detail from '../views/pages/detail';
import Form from '../views/pages/form';
import Home from '../views/pages/home';
import Post from '../views/pages/post';
import Searchpages from '../views/pages/searchpages';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/post': Post,
  '/form': Form,
  '/searchpages': Searchpages,
  '/detail': Detail,
};

export default routes;
