import React from 'react'
import image8 from '../Assests/image9.jpg'

export default function Gallery() {
  return (
  <>
     <main id="mainservice">
 <p id="about"> <i className="fa-solid fa-bars">Services</i></p>
 <div id="aboutdiv">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti illum deserunt excepturi qui dolorem ullam, quos eum provident ex ea voluptatum nulla, ipsa placeat. Repellendus, totam aliquid libero amet eaque minima, modi adipisci mollitia, ipsum vel quam consectetur? Laborum iusto et ullam natus magnam culpa perspiciatis id, tempora, repellendus officiis sed numquam earum temporibus non modi? Esse, voluptatum laudantium ipsam necessitatibus ipsum consequuntur consequatur nobis exercitationem pariatur inventore soluta, placeat magnam! Nesciunt architecto eos numquam, iusto labore rerum quas dignissimos ut. Iusto error distinctio cum quam neque ipsa. Earum ducimus libero sequi deserunt sunt accusantium, dolores amet quam aspernatur quas reprehenderit id molestias dolorem ullam laudantium beatae. Quo accusantium veritatis deserunt velit atque quos dicta harum placeat, fugiat hic suscipit porro maxime saepe quas quae, delectus enim! Quos accusamus harum fugiat odio corporis debitis ipsum veritatis odit iusto non eaque dolor blanditiis autem deleniti nobis nostrum laudantium, sed est repellat explicabo, officia commodi t
 </div>
</main>
{/* Images div */}
<div id='galleryimages'>
<img src={image8} alt=''/>
<img src={image8} alt=''/>
<img src={image8} alt=''/>
<img src={image8} alt=''/>
<img src={image8} alt=''/>
<img src={image8} alt=''/>


</div>
  {/* three cards */}
  <div id='threecard'>
    <div id='cardone'>
      <li id='icon'> <i class="fa-brands fa-squarespace"></i></li>
      <h1> Baisc Plan</h1>
     <main id='orderdiv'>

     </main>



    </div>
    <div id='cardone'></div>
    <div id='cardone'></div>
  </div>
  </>
  )
}
