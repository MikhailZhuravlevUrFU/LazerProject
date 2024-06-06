import Admin from './pages/Admin'
import Login from './pages/Login';
import Registration from './pages/Registration';
import Shop from './pages/Shop';
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTARTION_ROUTE, SHOP_ROUTE } from 'utils/consts';

export const loginRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTARTION_ROUTE,
        Component: Registration
    },

];