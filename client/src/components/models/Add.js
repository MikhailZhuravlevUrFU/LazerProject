import '../../index.css';
import React from 'react'
import {Button, Form, Modal} from 'react-bootstrap';


const Add = ({show, onHide}) => {
  return (
    <Modal 
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
        <Modal.Header closeButton className='add-item'>
            <Modal.Title className='TitleAddItem'>
                Добавление товара
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='add-item'>
            <Form className="placeholder-add-item">
                <Form.Control
                    type="text"
                    placeholder="Наименование"
                />
            </Form>
            <Form className="placeholder-add-item">
                <Form.Control
                    type="text"
                    placeholder="Видеокарта"
                />
            </Form>
            <Form className="placeholder-add-item">
                <Form.Control
                    type="text"
                    placeholder="Процессор"
                />
            </Form>
            <Form className="placeholder-add-item">
                <Form.Control
                    type="text"
                    placeholder="Материнская плата"
                />
            </Form>
            <Form className="placeholder-add-item">
                <Form.Control
                    type="text"
                    placeholder="Система охлаждения"
                />
            </Form>
            <Form className="placeholder-add-item">
                <Form.Control
                    type="text"
                    placeholder="Оперативная память"
                />
            </Form>
            <Form className="placeholder-add-item">
                <Form.Control
                    type="text"
                    placeholder="Память"
                />
            </Form>
            <Form className="placeholder-add-item">
                <Form.Control
                    type="text"
                    placeholder="Цена"
                />
            </Form>
        </Modal.Body>
        <Modal.Footer className="footer-add-item">
            <Button className="button-add-item" onClick={onHide}>Добавить</Button>
        </Modal.Footer>

    </Modal>

  )
}

export default Add;
