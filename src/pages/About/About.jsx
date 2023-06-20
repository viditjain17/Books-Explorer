import React from 'react';
import './About.css';
import aboutImg from '../../images/about-img.jpg';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          {/* <h2>About</h2> */}
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1 fw-bold abt">About Us</h2>
            <p className="fs-17">
              ---Welcome to Manuscript, your go-to for book searches. Discover books from various genres and authors.
              Our Mission: Making book finding easier. Inspire, educate, and entertain you.
              What We Offer: User-friendly web app. Detailed book info. Accurate data for informed decisions.
              Seamless browsing: Genres, bestsellers, trends. Personalized bookshelves. Share recommendations.
              Commitment to Quality: Diverse collection. Well-reviewed books. Engaging literature.
              Join Our Community: Connect with book lovers. Discussions, blog, newsletter. Share the joy of reading.
              Contact Us: Friendly customer support. Enhance your Manuscript experience.
              Thank you for choosing Manuscript. Happy reading!.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
