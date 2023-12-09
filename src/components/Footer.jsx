import React from 'react';
import { Form, InputGroup } from 'react-bootstrap'
import logo from '../icons/icon.png'
import { Link } from 'react-router-dom';
function footer() {
    return (
        <div style={{ height: "300px" }} className='bg-dark w-100 text-primary d-flex flex-column justify-content-center align-items-center'>
            <div className="footer-content h-100 align-items-center w-100 d-flex flex-row justify-content-evenly">
                <div className="about" style={{ width: "350px" }}>
                    <Link to={'/'} className='fs-4 text-primary' style={{ textDecoration: "none", fontWeight: "bold" }}>
                        <img src={logo} alt=""/>
                        TRACK'M
                    </Link>
                </div>
                <div className="Links d-flex flex-column">
                    <h3 className='text-primary'>Links</h3>
                    <Link to={'/'} className='text-light' style={{ textDecoration: "none"}}>Home</Link>
                    <Link to={'/'} className='text-light' style={{ textDecoration: "none" }}>Cart</Link>
                    <Link to={'/'} className='text-light' style={{ textDecoration: "none"}}>Wish List</Link>
                </div>
                <div className="Guides d-flex flex-column">
                    <h3 className='text-primary'>GUIDES</h3>
                    <Link to={'/'} className='text-light' style={{ textDecoration: "none" }}>Services</Link>
                    <Link to={'/'} className='text-light' style={{ textDecoration: "none"}}>Forum</Link>
                    <Link to={'/'} className='text-light' style={{ textDecoration: "none"}}>Support</Link>
                </div>
                <div className="Contact">
                    <h3 className='text-primary'>SUBSCRIBE</h3>
                    <InputGroup size="sm" className="mb-3 w-100">
                        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        <button type="button"  className="btn btn-primary">SUBSCRIBE</button>
                    </InputGroup>
                    <div className='d-flex w-100 justify-content-evenly'>
                        <div><Link to={'/'} style={{ textDecoration: "none"}}><i className="fa-brands fa-twitter text-light fa-xl"></i></Link></div>
                        <div><Link to={'https://whatsapp.com'} style={{ textDecoration: "none"}}><i className="fa-brands fa-whatsapp text-light fa-xl"></i></Link></div>
                        <div><Link to={'https://facebook.com'} style={{ textDecoration: "none" }}><i className="fa-brands fa-facebook text-light fa-xl"></i></Link></div>
                    </div>
                </div>
            </div>
            <p>Copyright © 2023 Track'M by stevin.</p>
        </div>
    )
}

export default footer