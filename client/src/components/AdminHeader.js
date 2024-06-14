import '../index.css'; // Подключение ваших стилей
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from 'utils/consts';
import {Context} from '../index'
import { ADMIN_ROUTE } from '../utils/consts';

const AdminHeader = () => {
  const {user} = useContext(Context)

  return (
    <div className="headerline">
      <div className="logo">
        <a href="/"><img src="./img/Logo.png" alt="Logo" /></a>
      </div>

      <div className="nav">
        <a className="nav-item" href="#">Главная</a>
        <a className="nav-item" href="#">Товары</a>
        <a className="nav-item" href="#">Пользовтели</a>
        <a className="nav-item" href="#">Заказы</a>
      </div>

      <div className="cart">
        <a className="cart-img" href="#"><img src="./img/free-icon-shopping-bag-4903482 1.png" alt="Cart" /></a>
      </div>

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
          <Link className="button-h" to={ADMIN_ROUTE}>ADMIN</Link>
        </div>
      ) : (
        <div className="btn">
          <a className="button-h" href="#">ЗАКАЗАТЬ ЗВОНОК</a>
        </div>
      )}
    </div>
  );
};

export default AdminHeader;
