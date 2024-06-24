import '../index.css';
import React, { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { LOGIN_ROUTE } from 'utils/consts';
import {Context} from '../index'
import { SHOP_ROUTE } from '../utils/consts';

const AdminHeader = () => {
  const {user} = useContext(Context)
  const location = useLocation();

  return (
    <div className="headerline">
      <div className="logo">
        <a href="/"><img src="/img/Logo.png" alt="Logo" /></a>
        <span className="logo-admin">
            ADMIN PANEL
        </span>
      </div>

      <div className="nav">
        <Link className={`nav-item ${location.pathname === '/admin' ? 'active' : ''}`} to="/admin">ГЛАВНАЯ</Link>
        <Link className={`nav-item ${location.pathname === '/admin/items' ? 'active' : ''}`} to="/admin/items">ТОВАРЫ</Link>
        <Link className={`nav-item ${location.pathname === '/admin/users' ? 'active' : ''}`} to="/admin/users">ПОЛЬЗОВАТЕЛИ</Link>
        <Link className={`nav-item ${location.pathname === '/admin/orders' ? 'active' : ''}`} to="/admin/orders">ЗАКАЗЫ</Link>
        <Link className={`nav-item ${location.pathname === '/admin/catalog' ? 'active' : ''}`} to="/admin/catalog">КАТАЛОГ</Link>
      </div>
      <div className="right-section">
        {user.isLogin ? (
            <div className="user">
            <span className="btn-user">UserName</span>
            </div>
        ) : (
            <div className="user">
            <Link className="btn-user" to={LOGIN_ROUTE}>Войти</Link>
            </div>
        )}

        
        
        {user.isLogin ? (
            <div className="btn">
            <Link className="button-h" to={SHOP_ROUTE}>STORE</Link>
            </div>
        ) : (
            <div className="btn">
            <a className="button-h" href="#">ЗАКАЗАТЬ ЗВОНОК</a>
            </div>
        )}
      </div>
    </div>
  );
};

export default AdminHeader;
