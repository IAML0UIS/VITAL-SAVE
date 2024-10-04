import React from 'react'
import { medicamento } from '../variables/medicamento'
import { CardBody, CardTitle, CardText, Card, CardImg, Row, CardGroup, Button, Col } from "reactstrap";





export const Medicamentos = () => {
 
  return (
    <>
        <div className="content">
          <Row className='gy-4'>
            {
              medicamento.map((medicamentos) => (
                <Col md="4" key={medicamentos.id}> 
                  <CardGroup className="h-100">
                    <Card  className="h-100 d-flex flex-column card-animation">
                      <CardImg
                        alt="Card image cap"
                        src={ medicamentos.photoURL }
                        top
                        width="100%"
                      />
                      <CardBody className="d-flex flex-column">
                        <CardTitle tag="h5" className="mb-3 text-center">
                          <strong>
                            {medicamentos.medicamento}
                          </strong>
                        </CardTitle>
                        <CardText className="flex-grow-1 mb-3">
                          {medicamentos.informacion}
                        </CardText>
                      </CardBody>
                      <Button
                       className="custom-button"
                       onClick={() => window.location.href = medicamentos.link}
                       >
                       Mas Informacion...</Button> 
                    
                      
                    </Card>
                  </CardGroup>
                </Col>
              ))
            }
          </Row>
        </div>
    </>
  )
}


