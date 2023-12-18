import React from 'react'
import Header from '../components/Header'
import Trackedcard from '../components/Trackedcard'
import './page.css'
function MyMoviesCollection() {
    return (
        <>
            <Header/>
        <div className='collection-container'> 
        <Trackedcard/>
        </div>
        </>
    )
}
export default MyMoviesCollection