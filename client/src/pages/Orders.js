import '../index.css';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import AdminHeader from '../components/AdminHeader';

const Orders = ({ user }) => {
    const [itemsPcOpti, setItemsPcOpti] = useState([
        {
            id: 1,
            name: "Николай",
            lastname: "Зырянов",
            email: "example@mail.com",
            phone: "+79209210021",
            addres: "14000 Moscow, st.Pushkina, 1, 55",
            order: "Cyber",
            price: "105.999",
            status: "Оплачен"
        },
        {
            id: 2,
            name: "Максим",
            lastname: "Лавров",
            email: "example@mail.com",
            phone: "+79209210021",
            addres: "14000 Moscow, st.Pushkina, 1, 55",
            order: "Cyber",
            price: "105.999",
            status: "Отправлен"
        },
        {
            id: 3,
            name: "Justin",
            lastname: "Bridge",
            email: "example@mail.com",
            phone: "+79209210021",
            addres: "14000 Moscow, st.Pushkina, 1, 55",
            order: "One",
            price: "59.999",
            status: "Отменен"
        },
        {
            id: 4,
            name: "Fridreh",
            lastname: "Muller",
            email: "example@mail.com",
            phone: "+79209210021",
            addres: "14000 Moscow, st.Pushkina, 1, 55",
            order: "One",
            price: "59.999",
            status: "Возвращен"
        },
        {
            id: 5,
            name: "Илья",
            lastname: "Скурлатов",
            email: "example@mail.com",
            phone: "+79209210021",
            addres: "14000 Moscow, st.Pushkina, 1, 55",
            order: "Cyber",
            price: "105.999",
            status: "Принят"
        }
    ]);

  return (
    <>
    <AdminHeader user={user} />
    <div className="container-items">
        <div className="block">
            <span>Заказы</span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>E-mail</th>
              <th>Телефон</th>
              <th>Адрес</th>
              <th>Заказ</th>
              <th>Сумма, руб.</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {itemsPcOpti.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.addres}</td>
                <td>{item.order}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </>
  );
}

export default Orders;
