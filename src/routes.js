import Home from './views/Home.vue';
import GettingStarted from './views/GettingStarted.vue';
import Playground from './views/Playground.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/getting-started',
    name: 'Getting Started',
    component: GettingStarted,
  },
  {
    path: '/playground',
    name: 'Playground',
    component: Playground,
  },
];

export default routes;
