import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {

  return (
    <>
      <Provider store={store}>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<LandingPage />} />
          </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
