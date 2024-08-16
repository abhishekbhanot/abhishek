import React from 'react'
import image from '../Assests/image7.jpg'
import image8 from '../Assests/image9.jpg'
import login from '../Assests/login.jpg'
import video from '../Video/109087-683060438_medium.mp4'
export default function Blog() {
  return (
   <>
     <main id="mainblog">
 <p id="about"> <i className="fa-solid fa-bookmark">Blog</i></p>
 <div id="aboutdiv">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti illum deserunt excepturi qui dolorem ullam, quos eum provident ex ea voluptatum nulla, ipsa placeat. Repellendus, totam aliquid libero amet eaque minima, modi adipisci mollitia, ipsum vel quam consectetur? Laborum iusto et ullam natus magnam culpa perspiciatis id, tempora, repellendus officiis sed numquam earum temporibus non modi? Esse, voluptatum laudantium ipsam necessitatibus ipsum consequuntur consequatur nobis exercitationem pariatur inventore soluta, placeat magnam! Nesciunt architecto eos numquam, iusto labore rerum quas dignissimos ut. Iusto error distinctio cum quam neque ipsa. Earum ducimus libero sequi deserunt sunt accusantium, dolores amet quam aspernatur quas reprehenderit id molestias dolorem ullam laudantium beatae. Quo accusantium veritatis deserunt velit atque quos dicta harum placeat, fugiat hic suscipit porro maxime saepe quas quae, delectus enim! Quos accusamus harum fugiat odio corporis debitis ipsum veritatis odit iusto non eaque dolor blanditiis autem deleniti nobis nostrum laudantium, sed est repellat explicabo, officia commodi tenetur necessitatibus dignissimos. Molestiae saepe mollitia culpa. Rerum nisi eos ducimus enim dolore aut laborum iste esse reiciendis, sit quisquam odio temporibus aliquam, quis dolorum ipsum distinctio, soluta non amet! Quaerat, beatae dolorum! Excepturi eum obcaecati odio architecto libero perferendis eveniet, explicabo aliquid assumenda porro doloremque Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet eum repellendus eaque, quas commodi corporis deserunt ipsa rem neque assumenda laudantium odio atque, vel delectus nisi itaque quae aut molestiae rerum. Nob
 </div>
</main>
{/* images div */}
<marquee>
<img src ={image } alt=''/>
<img src ={image } alt=''/>
<img src ={image } alt=''/>
<img src ={image } alt=''/>
<img src ={image } alt=''/>
</marquee>
{/* design based  */}
<section id='blogsec1' >
  <div id='blogdiv1'>
    <h1>We Love To Customize For Your Need</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum officiis quibusdam est commodi laudantium magnam fugit, nihil, repellendus saepe, assumenda id quisquam provident temporibus. Cupiditate exercitationem asperiores voluptate quos dolorem omnis dolore saepe? Expedita quia maiores, ex adipisci vitae aut sunt architecto sit? Deleniti ad delectus nostrum voluptas cupiditate libero sed perspiciatis dignissimos? Sed dolorum soluta rem, dicta neque architecto?</p> </div> 
  <div id='blogdiv2'style={{ backgroundImage:`url(${image8})` , backgroundSize: 'cover'}}>
    <button id='cus'>For Customization <i className="fa-solid fa-check"></i></button>
    
     </div> 

</section>
{/* video div */}
<div id='videodiv'>
  <video src={video} loop muted autoPlay />
</div>
{/* login form */}
<div id='loginmain' style={{ backgroundImage:`url(${login})` , backgroundSize: 'contain'}}>
<div className="form-container">
      <p className="title">Welcome back</p>
      <form className="form">
        <input type="email" className="input" placeholder="Email"/>
        <input type="password" className="input" placeholder="Password"/>
        <p className="page-link">
          <span className="page-link-label">Forgot Password?</span>
        </p>
        <button className="form-btn">Log in</button>
      </form>
      <p className="sign-up-label">
        Don't have an account?<span className="sign-up-link">Sign up</span>
      </p>
    
        <div className="google-login-button">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" className="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          <span>Log in with Google</span>
        </div>
      </div>
    </div>

   </>
  )
}
