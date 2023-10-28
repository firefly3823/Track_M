import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';
import Header from '../components/Header'


function Home() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleLogout = ()=>{
        dispatch(logout())
    }
    return (
        <div>
            <Header/>

            <h1 className='pt-5'>Welcome to the Home Page</h1>
            {
            user && (
                <div>
                    <p>Logged in as: {user.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    )
}

export default Home