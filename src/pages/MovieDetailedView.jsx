import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams } from 'react-router-dom'
import { APIKEY } from '../services/requests'
import tmdbInstance from '../services/commonServerAPI'
import { Button, Col, Row } from 'react-bootstrap';
import './page.css'
function MovieDetailedView() {
    const [movies,setMovies] = useState([])
    const { id, media_type } = useParams()
    console.log(media_type);
    const MovieThumbnail = `https://image.tmdb.org/t/p/original`
    const fetchUrl = `https://api.themoviedb.org/3/${media_type === 'tv' ? 'tv' : 'movie'}/${id}?api_key=${APIKEY}`
    const fetchData = async () => {
        try {
            const { data } = await tmdbInstance.get(fetchUrl)
            setMovies(data)
            // console.log(data.results);

        } catch (error) {
            console.log(`Server Not Found ${error}`)
        }
    }
    console.log(movies);
   
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <>
            <Header />
            <Row style={{ backgroundImage: `url(${MovieThumbnail}/${movies.backdrop_path})` }} className='row'>
                <Col className='mt-3 d-flex justify-content-center' sm={12} md={4} lg={4}>
                    <Card className='border-0 detail-card' style={{ width: '18rem' }}>
                        <Card.Img className='rounded-3' variant="top" src={`${MovieThumbnail}/${movies.poster_path}`} />
                        <Card.Body>
                            <Link to={movies.homepage} className='btn btn-danger'>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 4v16l13 -8z" />
                            </svg> Watch Now</Link>
                        
                            <p className='mt-3'><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star-filled" width={24} height={24} viewBox="0 0 24 24" color='#ffe726' strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" strokeWidth={0} fill="currentColor" />
                            </svg>{' '}{movies?.vote_average}</p>
                        </Card.Body>
                    </Card>

                </Col >
                <Col className='d-flex align-items-center mb-2' sm={12} md={8} lg={8} >
                    <div className='detail-card p-3 ms-2'>
                        <h2 className='text-light fw-bolder text'>{movies?.name ? movies.name : movies?.original_title}</h2>
                        <span class="badge bg-danger">{movies.type}</span>
                        <p className='text-light'>{movies.overview}</p>
                        <p className='text-light'>Status : <span className='text-danger'>{movies?.status}</span></p>
                        {
                            media_type==='movie'?
                            <p className='text-light'>Released Date : <span className='text-danger'>{movies?.release_date}</span></p>
                            :
                            <p className='text-light'>First Air Date : <span className='text-danger'>{movies?.first_air_date}</span></p>
                        }
                        {
                            !movies==null? movies?.spoken_languages.map((lang)=>(
                                <p className='text-light'>Released Date : <span className='text-danger'>{lang?.english_name},</span></p>
                            )):null
                        }

                    </div>
                </Col>
            </Row>



            
        </>
    )
}

export default MovieDetailedView