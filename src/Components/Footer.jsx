import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
          <div className="col-md-3">
            <h4>Quick Links</h4>
            <ul>
              <li><Link >Home</Link></li>
              <li><Link >About</Link></li>
              <li><Link >Contact</Link></li>
              <li><Link >FAQs</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Follow Us</h4>
            <ul>
              <li><Link  target="_blank"><i className="fab fa-facebook-f"></i> Facebook</Link></li>
              <li><Link target="_blank"><i className="fab fa-instagram"></i> Instagram</Link></li>
              <li><Link  target="_blank"><i className="fab fa-twitter"></i> Twitter</Link></li>
              <li><Link  target="_blank"><i className="fab fa-pinterest-p"></i> Pinterest</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest news and promotions!</p>
            <form>
              <input type="email" placeholder="Enter your email address"/>
              <button id='subscribe'>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Furniture World. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;