import React from 'react';
import Image from 'next/image';
import footerimglogo from '../../../public/image/image 11.png';
import footerback from '../../../public/image/footer-last.png';

const Footer3 = () => {
  return (
    <div className="footer-boxes">
      {/* Newsletter section */}
      <div className="footer-box1">
        <h1>Sign up for our Newsletter</h1>
        <p>Save up to 50% on tours and trips. Get instant access to lower prices.</p>
        <form action="">
          <input type="email" placeholder="abcd@gmail.com" />
          <button type="sub-home-button">Subscribe</button>
        </form>
      </div>
<hr />
      {/* Footer links sections */}
      <div className="footer-box2">
        <div className="footer-box2-boxes">
          <div className="footer-box-boxes-box">
            <h2>Top Destinations</h2>
            <h5>Abu Dhabi</h5>
            <h5>Dubai</h5>
            <h5>Europe</h5>
            <h5>Africa</h5>
            <h5>South America</h5>
          </div>
          <div className="footer-box-boxes-box">
            <h2>Popular Cities</h2>
            <h5>Dubai</h5>
            <h5>Europe</h5>
            <h5>Africa</h5>
            <h5>South America</h5>
          </div>
          <div className="footer-box-boxes-box">
            <h2>Company</h2>
            <h5>About Us</h5>
            <h5>Contact Us</h5>
            <h5>Activities</h5>
            <h5>Data Policy</h5>
            <h5>Cookies Policy</h5>
          </div>
          <div className="footer-box-boxes-box">
            <h2>Quick Links</h2>
            <h5>Become Host</h5>
            <h5>Become Agent</h5>
            <h5>Our Partners</h5>
            <h5>Our Investors</h5>
            <h5>Contact</h5>
          </div>
        </div>
      </div>
<hr />
      {/* Copyright and logo */}
      <div className="footer-box3">
        <div className="footer-box3-box" style={{ backgroundImage: `url(${footerback})` }}>
          <h6>Copyright © 2024. All Rights Reserved.</h6>
          <Image src={footerimglogo} alt="Logo" style={{
                mixBlendMode: "multiply"
          }}/>
        </div>
      </div>
    </div>
  );
};

export default Footer3;
