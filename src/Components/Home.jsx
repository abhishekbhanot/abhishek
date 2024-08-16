import React from 'react'
import image from '../Assests/image6.jpg'
import logo from '../Assests/logo.jpg'
import image7 from '../Assests/image7.jpg'
import image8 from '../Assests/image9.jpg'
import image9 from '../Assests/image10.jpg'
import image11 from'../Assests/image11.jpeg'
import image12 from'../Assests/image11.jpg'
import image13 from'../Assests/image12.jpg'
import image14 from'../Assests/image14.jpg'







export default function Home() {
  return (
    <>
    <header>
      <li> <i class="fa-solid fa-house" >Home</i></li>
      <p > House Of Locals </p>
      <li > <i class="fa-solid fa-magnifying-glass">Find Us</i></li>
     
    </header>
    <div id='homediv1'>
      <img src={logo}  alt=' ' id='logoimg'></img>
        <p >Confirm Satisfaction Of </p>
        <p >The Customer </p>
      </div>
      {/* second div */}
      <section id='mainsection' style={{ backgroundImage:`url(${image})` , backgroundSize: 'contain'}}>
       <div id='secdiv1'><br></br>
        <h1> Creating Spaces</h1>
        <h1 >That Inspires</h1>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, dolor.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        <button id='learn'>Learn More <i class="fa-solid fa-arrow-right"></i></button>

       </div>
      </section>
      {/* maindiv three */}
      <main id='crousel'>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id='imagemain' src={image9} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img id='imagemain' src={image7} class="d-block w-100" alt="..."/>
    </div>
  <div class="carousel-item">
<img id='imagemain' src={image8} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</main>
{/* phototext image */}

<div id='textimage'>
<div id='image11'> 
<img src={image11}alt='' id='textimagee'></img>
  
</div>
<div id='textdiv'> 
  <h1> Hello World</h1>
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem molestias in, hic incidunt maiores alias unde maxime libero nesciunt numquam quae voluptas cum non voluptatibus explicabo facere fugit, repellendus excepturi doloremque ipsa, amet ab dignissimos! Ea quia pariatur minima nisi assumenda? Labore autem voluptas voluptatibus nihil? Repellat, architecto minus?</p>
</div>

</div>
{/* 3divs  */}
<section className='flexsection'>
<div id='flex1'>
  <img id='fleximg' src={image12} alt=''/> 
  <p className='ptag'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, dolorem impedit. Explicabo repellat exercitationem itaque nihil ipsa laudantium, iure temporibus!</p>
  <button id='flexbutton'> Click Me</button>
  
  
  </div>
<div id='flex1'> 
<img id='fleximg' src={image13} alt=''/> 
  <p className='ptag'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, dolorem impedit. Explicabo repellat exercitationem itaque nihil ipsa laudantium, iure temporibus!</p>
  <button id='flexbutton'> Click Me</button>
</div>
<div id='flex1'> 
<img id='fleximg' src={image14} alt=''/> 
  <p className='ptag'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, dolorem impedit. Explicabo repellat exercitationem itaque nihil ipsa laudantium, iure temporibus!</p>
  <button id='flexbutton'> Click Me</button>
</div>




</section>
    
    
    
    </>
  )
}
