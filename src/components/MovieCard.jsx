import React from 'react'
import AOS from 'aos'
import Card from 'react-bootstrap/Card';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './MovieCard.css'


function MovieCard({ movie }) {
    // console.log(movie);

    const MovieThumbnail = `https://image.tmdb.org/t/p/original`
    AOS.init({
        delay: 100,
        easing: 'ease',
        mirror: false,
        once: true,
    });

    return (
        <Card className='mb-3' style={{ maxWidth: "25rem" }}>
            <Card.Img variant="top" className='card-image' src={`${MovieThumbnail}/${movie.poster_path}`} />
            <Card.Footer>
                <small className="text-muted d-flex justify-content-between">
                    <div>
                        <OverlayTrigger overlay={<Tooltip>View Info</Tooltip>}>
                            <Button variant="none" size="sm"><i className="fa-solid fa-xl fa-circle-info" style={{ color: "#3ca8ec" }}></i>
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip>Add to Watchlist</Tooltip>}>
                            <Button variant="none" size="sm"><i className="fa-solid fa-file-arrow-up fa-xl" style={{ color: "#3ca8ec" }}></i>
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip>Download Coming Soon</Tooltip>}>
                            <Button variant="none" size="sm"><i className="fa-solid fa-circle-down fa-xl" style={{ color: "#3ca8ec" }}></i>
                            </Button>
                        </OverlayTrigger>
                    </div>
                    
                    <div>
                        <OverlayTrigger overlay={<Tooltip>Watched</Tooltip>}>
                            <Button style={{ backgroundColor:"#003e4e"}} size="sm"><i className="fa-solid fa-xl fa-check" style={{ color: "#7bff3b" }}></i>
                            </Button>
                        </OverlayTrigger>
                    </div>
                </small>
            </Card.Footer>
        </Card>
    )
        
}
export default MovieCard