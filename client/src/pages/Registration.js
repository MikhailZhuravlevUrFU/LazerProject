import React from 'react'
import { Link } from "react-router-dom"
import { LOGIN_ROUTE, SHOP_ROUTE } from 'utils/consts'

export default function Registration() {
  return (
    <div class="reg-text-container">
        <div class="reg-text">
            <span>Регистрация</span>
            <form action="/submit-form" method="post">
              <div class="form-group">
                <label for="name">Имя*</label>
                <input type="name" id="name" name="name" required></input>
              </div>
              <div class="form-group">
                <label for="surname">Фамилия*</label>
                <input type="surname" id="surname" name="surname" required></input>
              </div>
              <div class="form-group">
                <label for="login">Логин*</label>
                <input type="login" id="login" name="login" required></input>
              </div>
              <div class="form-group">
                <label for="email">E-mail*</label>
                <input type="email" id="email" name="email" required></input>
              </div>
              <div class="form-group">
                <label for="telephone">Телефон*</label>
                <input type="telephone" id="telephone" name="telephone" required></input>
              </div>
              <div class="form-group">
                <label for="city">Город*</label>
                <input type="city" id="city" name="city" required></input>
              </div>
              <div class="form-group">
                <label for="date">День рождения*</label>
                <input type="date" id="date" name="date" required></input>
              </div>
              <div class="form-group">
                <label for="password">Пароль*</label>
                <input type="password" id="password" name="password" required></input>
              </div>
              <div class="form-group">
                <label for="password">Подтверждение пароль*</label>
                <input type="password" id="password" name="password" required></input>
              </div>
              <div class="btn-reg">
                <Link class = "button-reg" to="/">Зарегистрироваться</Link>
              </div>
              <div class="descript-login">
                <Link class="rem" to={LOGIN_ROUTE}>Вход</Link>
                <Link class="reg" to={SHOP_ROUTE}>Забыли пароль</Link>
              </div>
            </form>
        </div>
    </div>
  )
}
