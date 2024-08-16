import React from 'react'
import { Link } from 'react-router-dom';
// import image from '../Assests/Dream-House-PNG.png'
// import image1 from '../Assests/house-1477041_640.jpg'

export default function Navbar() {
  return (
    <>
  


 <nav class="navbar navbar-expand-lg navbar-light " id='navbar'>
  <div class="container-fluid">
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link  class="nav-link active" aria-current="page"  id='button' to=''>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#" id='button' to='/About'>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#" id='button' to='/Blog'>Blog</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link " href="#" id='button'  role="button" aria-expanded="false"  to='/Gallery'>
            Services
          </Link>
         
        </li>
      </ul>
      
    </div>
  </div>


  <div id='nav2'>
  <i class="fa-brands fa-facebook"></i>
  <i class="fa-brands fa-youtube"></i>
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-github"></i>
  <button id='sign'> Sign In</button>

  </div>
</nav>

{/* footer */}


 



   </>
  )
}
