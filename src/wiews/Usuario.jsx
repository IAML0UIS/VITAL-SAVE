import React from 'react'
import { Col, CardBody, Card, } from "reactstrap";

export const Usuario = () => {
  return (
    <>
        <div className="content">
            <Col>
                <Card className="card-user animate__animated animate__backInDown">
                <div className="image">
                    <img alt="..." src="../src/assets/img/damir-bosnjak.jpg"/>
                </div>
                <CardBody>
                    <div className="author">
                        <img
                        alt="..."
                        className="avatar border-gray"
                        src="../src/assets/img/mike.jpg"
                        />
                        <h5 className="title">Eder Olivero</h5>
                    </div>
                    <h6 className=" text-center">
                        <strong>
                            usuario:
                        </strong>
                    <small> @soyEder</small>
                    </h6>
                </CardBody>
                </Card>
            </Col>
        </div>
    </>
  )
}
