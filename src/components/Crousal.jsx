import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';
function Crousal({ movie }) {
    const MovieThumbnail = `https://image.tmdb.org/t/p/original`
    return (
        <Carousel className='mt-2'>
            {movie.length > 0 ? movie.map((item) => (
                <Carousel.Item key={item.id} interval={1000}>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <div style={{ maxHeight: "92vh" }} className=''><img className='img-fluid' src={`${MovieThumbnail}/${item.backdrop_path}`} alt="" />
                    
                    </div>
                    <Carousel.Caption>
                        <h2 style={{ fontWeight: "900" }} className='text-primary fs-2'>{item.title ? item.title : item.name}</h2>
                        <p style={{ fontSize: "clamp(1rem,3.4783vw+0.3043rem+3rem)" }}>{item.overview}</p>
                        <Link to={`/details/${item.media_type}/${item.id}`} className='btn btn-danger' variant="none" size="sm"><i className="fa-solid fa-xl fa-circle-info" style={{ color: "#3ca8ec" }}></i>
                            {'  '}View</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            )) : null

            }

        </Carousel>
    )
}

export default Crousal