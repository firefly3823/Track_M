import React from 'react'
import Header from '../components/Header'
import MovieCard from '../components/MovieCard'


function Home() {

    return (
        <div>
            <Header />
            <MovieCard/>

            <h1 classNameName='pt-5'>Welcome to the Home Page</h1>
            <div>
                <ul className="pagination">
                    <li className="page-item disabled">
                        <a className="page-link" href="/">&laquo;</a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="/">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">4</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">5</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">&raquo;</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home