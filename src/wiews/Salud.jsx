import React from 'react';
import { Col, CardTitle, Card, CardHeader, CardBody, FormGroup, Form, Row, Input, Button } from "reactstrap";
import { useForm } from '../variables/useForm'; // Asegúrate de que este hook esté correctamente implementado
import axios from 'axios'; // Asegúrate de que axios esté instalado

const saludM = {
  presion_arterial: '',
  glucosa: '',
  actividad_fisica: ''
};

export const Salud = () => {
  const {
    presion_arterial,
    glucosa,
    actividad_fisica,
    onInputChange
  } = useForm(saludM);

  const onSubmitSalud = async (e) => {
    e.preventDefault();

    // Crear el objeto de salud
    const nuevoSalud = {
      presion_arterial,
      glucosa,
      actividad_fisica
    };

    try {
      // Hacer la solicitud POST a la API
      const response = await axios.post('http://localhost:5000/api/salud', nuevoSalud);
      
      console.log('Datos de salud agregados:', response.data);
      // Puedes agregar una notificación aquí o limpiar el formulario si es necesario
    } catch (error) {
      console.error('Error al agregar los datos de salud:', error);
      // Manejar el error aquí, tal vez mostrar un mensaje al usuario
    }
  };

  return (
    <>
      <div className='content'>
        <Col md="12">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5">Agregar Datos de Salud</CardTitle>
            </CardHeader>
            <CardBody>
              <Form onSubmit={onSubmitSalud}>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>Presión Arterial</label>
                      <Input
                        value={presion_arterial}
                        name="presion_arterial"
                        type="text"
                        onChange={onInputChange}
                        placeholder="Ejemplo: 120/80"
                      />
                    </FormGroup>
                  </Col>

                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>Glucosa en Sangre</label>
                      <Input
                        value={glucosa}
                        name="glucosa"
                        type="text"
                        onChange={onInputChange}
                        placeholder="Ejemplo: 90"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Actividad Física Realizada</label>
                      <Input
                        type="text"
                        value={actividad_fisica}
                        name='actividad_fisica'
                        onChange={onInputChange}
                        placeholder="Ejemplo: 30 minutos de caminata"
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
                      Agregar Datos de Salud
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
