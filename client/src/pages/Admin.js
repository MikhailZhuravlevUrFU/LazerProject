import React, { useState } from 'react';
import { Button, Container} from 'react-bootstrap';
import AdminHeader from '../components/AdminHeader';

const Admin = ({user}) => {

  return (
    <>
    <AdminHeader user={user} />
    <Container className='container-main-admin'>
      <img src="./img/avatar.png" className='avatar-admin-main'></img>  
    </Container>
    </>
  );
}

export default Admin;
