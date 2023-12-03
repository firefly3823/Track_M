import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AOS from 'aos'

function MovieCard() {
    AOS.init({
        delay: 200,
        easing: 'ease',
        mirror: false
    });
    
    return (
        <div className='pt-4'>
            <Row className='ps-2' style={{width:"100%"}}>
                <Col data-aos="flip-left" className='d-flex justify-content-center align-items-center' sm={6} md={4} lg={2}>
                    <div className="card border-info mb-3 " style={{ maxWidth: "15rem" }}>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h4 className="card-title">Info card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </Col>

                <Col data-aos="flip-left" className='d-flex justify-content-center align-items-center' sm={6} md={4} lg={2}>
                    <div className="card border-info mb-3 " style={{ maxWidth: "15rem" }}>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h4 className="card-title">Info card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </Col>

                <Col className='d-flex justify-content-center align-items-center' sm={6} md={4} lg={2}>
                    <div className="card border-info mb-3 " style={{ maxWidth: "15rem" }}>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h4 className="card-title">Info card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </Col>

                <Col className='d-flex justify-content-center align-items-center' sm={6} md={4} lg={2}>
                    <div className="card border-info mb-3 " style={{ maxWidth: "15rem" }}>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h4 className="card-title">Info card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </Col>

                <Col className='d-flex justify-content-center align-items-center' sm={6} md={4} lg={2}>
                    <div className="card border-info mb-3 " style={{ maxWidth: "15rem" }}>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h4 className="card-title">Info card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </Col>

            </Row>
            
            
            </div>
    )
}

export default MovieCard