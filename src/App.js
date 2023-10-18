import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<LandingPage />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
