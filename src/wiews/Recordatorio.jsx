import React from 'react'
import { Col, CardTitle, Card, CardHeader, CardBody, FormGroup, Form, Row, Input, Button} from "reactstrap";
import { useForm } from '../variables/useForm';

const recordatorioM = {
  usuario: '',
  nombre: '',
  apellido: '',
  medicamentos: '',
  ciudad: '',
  fecha: '',
  descripcionCita: '',
}
export const Recordatorio = () => {
  const {
    usuario, 
    nombre, 
    apellido, 
    medicamentos, 
    ciudad, 
    fecha,
    descripcionCita,
    onInputChange
  } = useForm(recordatorioM);
  const onSubmitRecordatorio = (e) => {
    e.preventDefault();
  };


  return (
    <>
        <div className='content'>
        <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Recordatorio</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={ onSubmitRecordatorio }>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Usuario</label>
                        <Input
                          defaultValue={ usuario }
                          name='usuario'
                          placeholder="Usuario"
                          type="text"
                          onChange={ onInputChange }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Nombre</label>
                        <Input
                          defaultValue={ nombre }
                          name='nombre'
                          placeholder="Nombre"
                          type="text"
                          onChange={ onInputChange }
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Apellido</label>
                        <Input
                          defaultValue={ apellido }
                          name='apellido'
                          placeholder="Apellido"
                          type="text"
                          onChange={ onInputChange }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Medicamentos</label>
                        <Input
                          defaultValue={ medicamentos }
                          name='medicamentos'
                          placeholder="Medicamentos"
                          type="text"
                          onChange={ onInputChange }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Ciudad</label>
                        <Input
                          defaultValue={ ciudad }
                          name='ciudad'
                          placeholder="City"
                          type="text"
                          onChange={ onInputChange }
                        />
                      </FormGroup>
                    </Col>
                   
                    <Col className="pl-1" md="8">
                      <FormGroup>
                        <label>
                          Fecha
                        </label>
                        <Input
                          defaultValue={ fecha }
                          id="exampleDate"
                          name="fecha"
                          placeholder="date placeholder"
                          type="date"
                          onChange={ onInputChange }
                        />
                      </FormGroup> 
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Descripcion de la cita</label>
                        <Input
                          type="textarea"
                          defaultValue={ descripcionCita}
                          name='descripcionCita'
                          onChange={ onInputChange }
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
                        Agregar Horario
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </div>
    </>
  )
}
