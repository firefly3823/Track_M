import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'
import { Provider } from 'react-redux';
import store from './redux/store'
import MovieDetailedView from './pages/MovieDetailedView';

function App() {

  return (
    <>
      <Provider store={store}>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<LandingPage />} />
          <Route path='/details/:media_type/:id' element={<MovieDetailedView/>}/>
          </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
