import Home from '../Views/pages/home';
import Favorite from '../Views/pages/favorite';
import Detail from '../Views/pages/detail';
import About from '../Views/pages/about';

const Routes = {
  '/': Home,
  '/favorite': Favorite,
  '/about': About,
  '/detail/:id': Detail,
};

export default Routes;
