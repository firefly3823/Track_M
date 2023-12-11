import React, { useState } from 'react'
import './component.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function Trackedcard() {
    const [key, setKey] = useState('home');
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

    return (
        <>
            
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                {
                    tabs.map((tabs)=>(
                        <Tab eventKey={tabs.status} key={tabs.value} title={tabs.label}>
                            <div className='collection-card'>
                                <img src="https://image.tmdb.org/t/p/original/l2bqoY9rgPAgugPkOTowIPIv61j.jpg" width={'30px'} alt="" />
                                Tab content for Home
                            </div>
                        </Tab>
                    ))
                    
                
                }
                
            </Tabs>
            
        </>
    )
}

export default Trackedcard