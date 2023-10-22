import React, { useEffect, useState } from 'react'
import '../App.css'
import logo from '../icons/icon.png'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap'
import LoginRegister from '../components/LoginRegister'
import request from '../requests'
import tmdbAxiosInstance from '../tmdbAxiosInstance'
import LoginUser from '../components/LoginUser';
import { Link } from 'react-router-dom';

function LandingPage() {
    const fetchurl = request.fetchTrending
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const[movies, setMovies ] = useState({})
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //api call
    const fetchData = async ()=>{
        const {data} = await tmdbAxiosInstance.get(fetchurl)
        setMovies(data.results[Math.floor(Math.random()*data.results.length)])
    }
useEffect(()=>{fetchData()},[])

    return (
        <>
            <div style={{ backgroundImage: `url(${baseUrl}/${movies.backdrop_path})`, backgroundAttachment: "fixed", backgroundPosition: "center",backgroundSize:"cover",backgroundBlendMode:"darken" }} className='container-fluid landing-page-container w-100 text-center d-flex flex-column justify-content-center align-items-center'>
                <img width={'150px'} src={logo} alt="" />
                <h1 style={{ color: "white", fontSize: "70px" }}>TRACK' M <br /> ALL</h1>
                <p className='text-light'>Track shows and movies you watch. <br /> Discover what's hot and where
                    to stream it. Share comments, recommendations, and ratings.</p>
                <Button onClick={handleShow} className='btn btn-lg btn-primary'>JOIN TO TRACK</Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title><img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}Sign up to Track'M</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <LoginRegister />
                        <LoginUser/>
                    </Modal.Body>

                    <Modal.Footer className='d-flex justify-content-center'>
                        <Link to='#'>Already have account?</Link>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    )
}

export default LandingPage