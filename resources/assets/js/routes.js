import VueRouter from 'vue-router';

import Login from './pages/auth/Login.vue';
import Register from './pages/auth/Register.vue';
import DashboardMain from './pages/dashboard/Main.vue';
import AuthMain from './pages/auth/Main.vue';

import Forms from './components/Forms';
import Widgets from './components/Widgets.vue';

let routes = [
  {
    path: '/login',
    component: AuthMain,
    children: [
      {
        path: '',
        component: Login
      }
    ]
  },
  {
    path: '/register',
    component: AuthMain,
    children: [
      {
        path: '',
        component: Register
      }
    ]
  },
  {
    path: '/',
    component: DashboardMain,
    name: 'Dashboards',
    children: [
      {
        path: 'forms',
        alias: '',
        component: Forms,
        name: 'Forms',
        meta: {requiredAuth: true, group: 'components'}
      },
      {
        path: 'widgets',
        component: Widgets,
        name: 'Widgets',
        meta: {requiredAuth: true, group: 'components'}
      }
    ]
  }
];

export default new VueRouter({
  mode: 'history',
  routes
})
