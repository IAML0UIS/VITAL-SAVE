import React from 'react';
import { Col, CardTitle, Card, CardHeader, CardBody, FormGroup, Form, Row, Input, Button } from "reactstrap";
import { useForm } from '../variables/useForm';
import axios from 'axios'; // Asegúrate de que axios esté instalado

const recordatorioM = {
  fecha: '',
  hora: '',
  descripcion: '',
  estado: 'pendiente' // Estado por defecto
};

export const Recordatorio = () => {
  const {
    fecha,
    hora,
    descripcion,
    estado,
    onInputChange
  } = useForm(recordatorioM);

  const onSubmitRecordatorio = async (e) => {
    e.preventDefault();

    // Crear el objeto del recordatorio
    const nuevoRecordatorio = {
      fecha,
      hora,
      descripcion,
      estado
    };

    try {
      // Hacer la solicitud POST a la API
      const response = await axios.post('http://localhost:5000/api/recordatorios', nuevoRecordatorio);
      
      console.log('Recordatorio agregado:', response.data);
      // Puedes agregar una notificación aquí o limpiar el formulario si es necesario
    } catch (error) {
      console.error('Error al agregar el recordatorio:', error);
      // Manejar el error aquí, tal vez mostrar un mensaje al usuario
    }
  };

  return (
    <>
      <div className='content'>
        <Col md="12">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5">Agregar Recordatorio</CardTitle>
            </CardHeader>
            <CardBody>
              <Form onSubmit={onSubmitRecordatorio}>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>Fecha</label>
                      <Input
                        value={fecha}
                        name="fecha"
                        type="date"
                        onChange={onInputChange}
                      />
                    </FormGroup>
                  </Col>

                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>Hora</label>
                      <Input
                        value={hora}
                        name="hora"
                        type="time"
                        onChange={onInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Descripción</label>
                      <Input
                        type="textarea"
                        value={descripcion}
                        name='descripcion'
                        onChange={onInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Estado</label>
                      <Input
                        type="text"
                        value={estado}
                        name='estado'
                        readOnly // Puedes hacer que sea solo lectura o editable según tus necesidades
                      />
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button
                      className="custom-button"
                      color="primary"
                      type="submit"
                    >
                      Agregar Recordatorio
                    </Button>
                  </div>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  );
}
