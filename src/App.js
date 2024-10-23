import './App.css';
import NavrBar_1 from './components/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/home';
import About from './Pages/about';
import Contacts from './Pages/contact';
import News from './Pages/news';
import NavrBar_2 from './components/navigation';
import Products from './Pages/product';
import Mycounter from './Pages/mycounter';
import Random_user from './Pages/random_user';
function App() {
  return (
    <>
    <BrowserRouter>
    <NavrBar_2/>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contacts />}/>
          <Route path='/news' element={<News />}/>
          <Route path='/product' element={<Products />}/>
          <Route path='/mycounter' element={<Mycounter />}/>
          <Route path='/random_user' element={<Random_user />}/>
      </Routes>
    </BrowserRouter>
    </>     
  );
}

export default App;
