import React, { useState } from 'react'
import './component.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Trackedcard() {
    const [key, setKey] = useState('watchlist');
    const tabs = [
        {
            label: "WATCHLIST",
            value: "watchlist",
            status: `watchlist`,
        },
        {
            label: "WATCHED",
            value: "watched",
            status: `watched`,
        },

        {
            label: "FAVOURITE",
            value: "favourite",
            status: `favourite`,
        },
    ];
    console.log(key);
    return (
        <>
            <Tabs
                id="controlled-tab-example"
                defaultActiveKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                justify
            >
                {
                    tabs.map((tabs) => (

                        <Tab eventKey={tabs.status} key={tabs.value} title={tabs.label}>
                            <Card onClick="{handleDetails}" className='mb-3' style={{ maxWidth: "25rem" }}>
                                <Card.Img variant="top" className='card-image' src='https://image.tmdb.org/t/p/original//jf3YO8hOqGHCupsREf5qymYq1n.jpg' />
                                <Card.Footer>
                                    <small className="text-muted d-flex justify-content-between">
                                        <div>
                                            <OverlayTrigger overlay={<Tooltip>View Info</Tooltip>}>
                                                <Link to="{`/details/${movie.media_type}/${movie.id}`}" className='btn' variant="none" size="sm"><i className="fa-solid fa-xl fa-circle-info" style={{ color: "#3ca8ec" }}></i>
                                                </Link>
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
                                                <Button style={{ backgroundColor: "#003e4e" }} size="sm"><i className="fa-solid fa-xl fa-check" style={{ color: "#7bff3b" }}></i>
                                                </Button>
                                            </OverlayTrigger>
                                        </div>
                                    </small>
                                </Card.Footer>
                            </Card>
                            
                        </Tab>
                    ))


                }

            </Tabs>

        </>
    )
}

export default Trackedcard