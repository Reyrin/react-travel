import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <nav className="nav">
        <img src="img/logo.svg" width="60px" alt="React-Travel" className="nav__logo" />

        <ul className="nav__list">
          <li className="nav__item">Home</li>
          <li className="nav__item">Services</li>
          <li className="nav__item">Products</li>
        </ul>

        <button className="nav__btn">Sing Up</button>
      </nav>

      <section className="video-screen">
        <video src="videos/video-1.mp4" autoplay loop></video>
        <h1>Adventure Awaits</h1>
        <p>What are you waiting for?</p>
        <div className="video-screen__btn">
          <button>Get Started</button>
          <button>Watch Trailer</button>
        </div>
      </section>

      <section className="cards">
        <div className="cards__container">
          <div className="card">
            <img src="img/img-9.jpg" alt="" className="card_img" />
            <h3 className="cart__title">Explore the hidden waterfall deep inside the Amazon Jungle</h3>
          </div>
          <div className="card">
            <img src="img/img-2.jpg" alt="" className="card_img" />
            <h3 className="cart__title">Travel through the Islands of Bali in a Private Cruise</h3>
          </div>
          <div className="card">
            <img src="img/img-3.jpg" alt="" className="card_img" />
            <h3 className="cart__title">Set Sail in the Atlantic Ocean visiting Uncharted Waters</h3>
          </div>
          <div className="card">
            <img src="img/img-4.jpg" alt="" className="card_img" />
            <h3 className="cart__title">Experience Football on Top of the Himilayan Mountains</h3>
          </div>
          <div className="card">
            <img src="img/img-8.jpg" alt="" className="card_img" />
            <h3 className="cart__title">Ride through the Sahara Desert on a guided camel tour</h3>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__form">
          <p className="footer__title">Join the Adventure newsletter to receive our best vacation deals</p>
          <p className="footer__descr">You can unsubscribe at any time.</p>
          <form>
            <input class="footer-input" name="email" type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="footer__links">
          <div className="footer__wrap">
            <div className="footer__item">
              <h3 className="footer__title">About US</h3>
              <ul className="footer__list">
                <li>How it works</li>
                <li>Testimonials</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className="footer__item">
              <h3 className="footer__title">Contact Us</h3>
              <ul className="footer__list">
                <li>Contact</li>
                <li>Support</li>
                <li>Destinations</li>
                <li>Sponsorships</li>
              </ul>
            </div>
          </div>
          <div className="footer__wrap">
          <div className="footer__item">
              <h3 className="footer__title">Videos</h3>
              <ul className="footer__list">
                <li>Submit Video</li>
                <li>Ambassadors</li>
                <li>Agency</li>
                <li>Influencer</li>
              </ul>
          </div>
          <div className="footer__item">
              <h3 className="footer__title">Social Media</h3>
              <ul className="footer__list">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Twitter</li>
              </ul>
          </div>
          </div>
        </div>
        <div className="footer__social">
          <img src="img/logo.svg" width="60px" alt="React-Travel" className="nav__logo" />
          <small className="footer__copyright">TRVL © 2020</small>
          <ul className="social-icons">
            <li><img src="img/social/facebook.svg" alt="facebook" width="28px" /></li>
            <li><img src="img/social/instagram.svg" alt="instagram" width="28px" /></li>
            <li><img src="img/social/youtube.svg" alt="youtube" width="28px" /></li>
            <li><img src="img/social/twitter.svg" alt="twitter" width="28px" /></li>
            <li><img src="img/social/linkedin.svg" alt="linkedin" width="28px" /></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
