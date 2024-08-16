
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import About from './Components/About';
import Blog from './Components/Blog';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
// import Footer from './Components/Footer';
 

function App() {
  return (
    <>
  <Navbar></Navbar>
   <Routes>
   <Route path='' element={<Home></Home>}></Route>
    <Route path='/About' element={<About></About>}></Route>
    <Route path='/Blog' element={<Blog></Blog>}></Route>
    <Route path='/Gallery' element={<Gallery></Gallery>}></Route>

   </Routes>
{/* <Footer></Footer> */}
  

   </>
  );
}

export default App;
