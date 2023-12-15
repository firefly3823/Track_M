import React, { useState } from 'react'
import './component.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Row,Col } from 'react-bootstrap';
function Trackedcard() {
    const [key, setKey] = useState('watchlist');
    const tabs = [
        {
            label: "WATCHLIST",
            value: "Watchlist",
            status: `Watchlist`,
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
            
            {/* <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            > */}
                {
                    // tabs.map((tabs)=>(
                        
                    //         <Tab eventKey={tabs.status} key={tabs.value} title={tabs.label}>
                    //             {/* <div className='collection-card'>
                    //                 <img className='img-fluid' src="https://image.tmdb.org/t/p/original/l2bqoY9rgPAgugPkOTowIPIv61j.jpg" width={'100'} alt="" />
                    //                 Tab content for Home
                    //             </div> */}
                    //         <Row className=''>
                    //             <Col className='d-flex collection-card justify-content-evenly' sm={12} md={6} lg={3}>
                    //             <div>
                    //                 <img className='img-fluid' src="https://image.tmdb.org/t/p/original/l2bqoY9rgPAgugPkOTowIPIv61j.jpg" width={'100px'} alt="" />
                    //             </div>
                    //             <div>
                    //                 test
                    //             </div>
                    //             </Col>
                    //             </Row>
                    //         </Tab>
                    // ))
                    
                
                }
                
            {/* </Tabs> */}
            
        </>
    )
}

export default Trackedcard