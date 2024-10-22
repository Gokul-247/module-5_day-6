import './App.css';
import NavrBar_1 from './components/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/home';
import About from './Pages/about';
import Contacts from './Pages/contact';
import News from './Pages/news';
function App() {
  return (
    <>
    <NavrBar_1 />
    <h1>Use above navigation to move to different pages</h1>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/news' element={<News />}/>
      </Routes>
    </BrowserRouter>
    </>     
  );
}

export default App;
