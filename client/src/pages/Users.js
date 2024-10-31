import '../index.css';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import AdminHeader from '../components/AdminHeader';

const Users = ({ user }) => {
    const [itemsPcOpti, setItemsPcOpti] = useState([
        {
            id: 1,
            name: "Николай",
            lastname: "Зырянов",
            phone: "+79209210021",
            email: "example@mail.com",
            country: "Russia"
        },
        {
            id: 2,
            name: "Максим",
            lastname: "Лавров",
            phone: "+79209210021",
            email: "example@mail.com",
            country: "Russia"
        },
        {
            id: 3,
            name: "Justin",
            lastname: "Bridge",
            phone: "+11209210021",
            email: "example@mail.com",
            country: "USA"
        },
        {
            id: 4,
            name: "Fridreh",
            lastname: "Muller",
            phone: "+49209210021",
            email: "example@mail.com",
            country: "Germany"
        },
        {
            id: 5,
            name: "Илья",
            lastname: "Скурлатов",
            phone: "+79209210021",
            email: "example@mail.com",
            country: "Russia"
        }
    ]);

  return (
    <>
    <AdminHeader user={user} />
    <div className="container-items">
        <div className="block">
            <span>Пользователи</span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Телефон</th>
              <th>E-mail</th>
              <th>Страна</th>
            </tr>
          </thead>
          <tbody>
            {itemsPcOpti.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </>
  );
}

export default Users;
