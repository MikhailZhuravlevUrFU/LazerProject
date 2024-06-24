import Admin from './pages/Admin'
import Login from './pages/Login';
import Registration from './pages/Registration';
import Shop from './pages/Shop';
import Items from './pages/Items';
import Users from './pages/Users';
import Orders from './pages/Orders';
import Catalog from './pages/Catalog';
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTARTION_ROUTE, SHOP_ROUTE, ITEMS_ADMIN_ROUTE, USERS_ADMIN_ROUTE, ORDERS_ADMIN_ROUTE, CATALOG_ADMIN_ROUTE } from 'utils/consts';

export const loginRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ITEMS_ADMIN_ROUTE,
        Component: Items
    },
    {
        path: USERS_ADMIN_ROUTE,
        Component: Users
    },
    {
        path: ORDERS_ADMIN_ROUTE,
        Component: Orders
    },
    {
        path: CATALOG_ADMIN_ROUTE,
        Component: Catalog
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