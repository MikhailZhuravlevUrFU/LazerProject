import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import AdminHeader from '../components/AdminHeader';

const Catalog = ({user}) => {

  return (
    <>
    <AdminHeader user={user} />
    </>
  );
}

export default Catalog;