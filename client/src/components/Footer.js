import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div class="back">
        <div class="text-footer">
          <span>Подобрать игровой <br></br> компьютер</span>
        </div>
        <div class="btn-footer">
          <a class="footer-button" href="#">Подробнее</a>
        </div>
        <div class="logo-footer">
          <img src="img/logo.png"></img>
        </div>
        <div class="info-footer">
          <span>© 2010-2024 LazerPC. <br></br>
                Все права защищены.</span>
        </div>
        <div class="list-footer">
          <ul class="company items">
              <li class="name">Компания</li>
              <li><a href="#">Контакты</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Новости</a></li>
          </ul>
          <ul class="support items">
              <li class="name">Поддержка</li>
              <li><a href="#">Доставка</a></li>
              <li><a href="#">Гарантия</a></li>
              <li><a href="#">FAQ</a></li>
          </ul>
          <ul class="Contacts items">
              <li class="name">Контакты</li>
              <li>+7 (495) 120-35-20</li>
              <li>Ежедневно с 10:00 до <br></br>21:00</li>
              <li>lazerpc@gmail.com</li>
          </ul>
        </div>
        <div class="rights">
          <span>© 2024 LazerPC. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}