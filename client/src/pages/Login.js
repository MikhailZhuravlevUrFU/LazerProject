import { Link } from "react-router-dom"
import { REGISTARTION_ROUTE, SHOP_ROUTE } from "utils/consts"

const Login = () => {
  return (
    <div class="sign-text-container">
        <div class="sign-text">
            <span>Вход</span>
            <form action="/submit-form" method="post">
              <div class="form-group">
                <label for="login">Логин*</label>
                <input type="login" id="login" name="login" required></input>
              </div>
              <div class="form-group">
                <label for="password">Пароль*</label>
                <input type="password" id="password" name="password" required></input>
              </div>
              <div class="btn-sign">
                <Link to="/"><a class = "button-sign">Войти</a></Link>
              </div>
              <div class="descript-login">
                <Link class="rem" to={SHOP_ROUTE}>Зыбыли пароль</Link>
                <Link class="reg" to={REGISTARTION_ROUTE}>Регистрация</Link>
              </div>
            </form>
        </div>
    </div>
  )
}

export default Login
