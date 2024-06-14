import '../index.css';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from 'utils/consts';
import {Context} from '../index'
import { SHOP_ROUTE } from '../utils/consts';

const AdminHeader = () => {
  const {user} = useContext(Context)

  return (
    <div className="headerline">
      <div className="logo">
        <a href="/"><img src="./img/Logo.png" alt="Logo" /></a>
        <span className="logo-admin">
            ADMIN MODE
        </span>
      </div>

      <div className="nav">
        <a className="nav-item" href="#">ГЛАВНАЯ</a>
        <a className="nav-item" href="#">ТОВАРЫ</a>
        <a className="nav-item" href="#">ПОЛЬЗОВАТЕЛИ</a>
        <a className="nav-item" href="#">ЗАКАЗЫ</a>
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
