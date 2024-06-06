import React from 'react'
import { Link } from "react-router-dom"
import { LOGIN_ROUTE } from 'utils/consts'

export default function Header() {
  return (
    <headr>
            <div class="headerline">

                <div class="logo">
                    <a href="#"><img src=".\img\Logo.png"></img></a>
                </div>

                <div class="nav">
                    <a class = "nav-item" href="#">ИГРОВЫЕ ПК</a>
                    <a class = "nav-item" href="#">НОУТБУКИ</a>
                    <a class = "nav-item" href="#">РАБОЧИЕ СТАНЦИИ</a>
                    <a class = "nav-item" href="#">УСЛУГИ</a>
                </div>

                <div class="cart">
                    <a class="cart-img" href="#"><img src=".\img\free-icon-shopping-bag-4903482 1.png"></img></a>
                </div>

                <div class="user">
                    <Link class="btn-user" to={LOGIN_ROUTE}>Войти</Link>
                </div>

                <div class="btn">
                    <a class = "button" href="#">ЗАКАЗАТЬ ЗВОНОК</a>
                </div>
            </div>
            <div class="headerdown">

                <div class="headertitle">
                    <span>
                        ИГРОВЫЕ <br></br>
                        КОМПЬЮТЕРЫ
                    </span>
                    <div class="headersubtitle">
                        Подберите компьютер, который подойдет для любых игр! <br></br>
                        Либо самостоятельно соберите комплектацию ПК и <br></br>
                        проверьте комплектующие на совместимость с помощью <br></br>
                        конфигуратора.
                    </div>
                </div>

                <div class="btn-titledown">
                    <a class = "button-titledown" href="#">Подобрать компьютер</a>
                </div>

                <div class="pc-h">
                    <img src="img/PC-H.png"></img>
                    <img class = "ellipse" src="img/Ellipse 38.png"></img>
                </div>

                <div class="sponcers">
                <a class = "nav-item-sponcers" href="https://www.intel.com/"><img src="img/intel.png"></img></a>
                <a class = "nav-item-sponcers" href="https://www.nvidia.com/"><img src="img/nvidea.png"></img></a>
                <a class = "nav-item-sponcers" href="https://www.gigabyte.com/"><img src="img/gigabyte.png"></img></a>
                <a class = "nav-item-sponcers" href="https://www.amd.com/"><img src="img/ryzen.png"></img></a>
                </div>
            </div>
    </headr>
  )
}
