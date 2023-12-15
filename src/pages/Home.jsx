import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import MovieCard from '../components/MovieCard'
import ReactPaginate from 'react-paginate'
import tmdbInstance from '../services/commonServerAPI'
import { Col, Row } from 'react-bootstrap'
import { APIKEY } from '../services/requests'
import Crousal from '../components/Crousal'

function Home() {
    const [movies, setMovies] = useState([])
    const [current_page, setCurrentPage] = useState(1)
    const fetchUrl = `/trending/all/week?api_key=${APIKEY}&page=${current_page}&_limit=18`
    const fetchData = async () => {
        try {
            const {data}  = await tmdbInstance.get(fetchUrl)
            setMovies(data.results)
            console.log(data.results);
            
        } catch (error) {
            console.log(`Server Not Found ${error}`)
        }
    }
    const handlePageClick = (data) => {
        setCurrentPage(data.selected + 1)
    }
    
    useEffect(() => {
        fetchData()
    }, [current_page])
    return (
        <div>
            <Header />
            <Crousal movie={movies} />
            {/* <h4 className='pt-3'>Explore Movies and shows</h4> */}
            <div className='pt-3'>
                    <Row className='ps-2' style={{ width: "100%" }}>
                        {
                            movies.length > 0 ? movies?.map((movie) => (
                                <Col key={movie.id} sm={6} md={4} lg={2} data-aos="flip-left" className='d-flex justify-content-center align-items-center'>
                                    <MovieCard movie={movie} />
                                </Col>
                            )) : null
                        }
                    </Row>
            </div>
            {/* <h1 className='pt-5'>Welcome to the Home Page</h1> */}
            <ReactPaginate
                previousLabel="<<"
                breakLabel="..."
                onPageChange={handlePageClick}
                selectedPageRel={1}
                pageCount={1000}
                marginPagesDisplayed={3}
                pageRangeDisplayed={10}
                nextLabel=">>"
                containerClassName={'pagination justify-content-center'}
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
                
            />
        </div>
    )
}

export default Home