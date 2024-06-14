import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { LOGIN_ROUTE } from 'utils/consts';
import {Context} from '../index'
import { ADMIN_ROUTE } from '../utils/consts';

const Header = observer(() => {
    const {user} = useContext(Context)
    return (
        <header>
            <div className="headerline">

                <div className="logo">
                    <a href="#"><img src="./img/Logo.png" alt="Logo" /></a>
                </div>

                <div className="nav">
                    <a className="nav-item" href="#">ИГРОВЫЕ ПК</a>
                    <a className="nav-item" href="#">НОУТБУКИ</a>
                    <a className="nav-item" href="#">РАБОЧИЕ СТАНЦИИ</a>
                    <a className="nav-item" href="#">УСЛУГИ</a>
                </div>

                <div className="cart">
                    <a className="cart-img" href="#"><img src="./img/free-icon-shopping-bag-4903482 1.png" alt="Cart" /></a>
                </div>

                {user.isLogin ?
                    <div className="user">
                        <span className="btn-user">UserName</span>
                    </div>
                    :
                    <div className="user">
                        <Link className="btn-user" to={LOGIN_ROUTE}>Войти</Link>
                    </div>
                }
                {user.isLogin ?
                    <div className="btn">
                        <Link className="button-h" to={ADMIN_ROUTE}>ADMIN</Link>
                    </div>
                    :
                    <div className="btn">
                        <a className="button-h" href="#">ЗАКАЗАТЬ ЗВОНОК</a>
                    </div>
                }
            </div>
            <div className="headerdown">

                <div className="headertitle">
                    <span>
                        ИГРОВЫЕ <br />
                        КОМПЬЮТЕРЫ
                    </span>
                    <div className="headersubtitle">
                        Подберите компьютер, который подойдет для любых игр! <br />
                        Либо самостоятельно соберите комплектацию ПК и <br />
                        проверьте комплектующие на совместимость с помощью <br />
                        конфигуратора.
                    </div>
                </div>

                <div className="btn-titledown">
                    <a className="button-titledown" href="#">Подобрать компьютер</a>
                </div>

                <div className="pc-h">
                    <img src="img/PC-H.png" alt="PC-H" />
                    <img className="ellipse" src="img/Ellipse 38.png" alt="Ellipse" />
                </div>

                <div className="sponcers">
                    <a className="nav-item-sponcers" href="https://www.intel.com/"><img src="img/intel.png" alt="Intel" /></a>
                    <a className="nav-item-sponcers" href="https://www.nvidia.com/"><img src="img/nvidea.png" alt="Nvidia" /></a>
                    <a className="nav-item-sponcers" href="https://www.gigabyte.com/"><img src="img/gigabyte.png" alt="Gigabyte" /></a>
                    <a className="nav-item-sponcers" href="https://www.amd.com/"><img src="img/ryzen.png" alt="Ryzen" /></a>
                </div>
            </div>
        </header>
    );
});

export default Header;
