import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../src/images/iconpage.png';
import icon3 from '../src/images/ICONPAGE3.png';
import icon4 from '../src/images/desk.jpg';

function Home() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Start new... today with <strong> Ikhokha </strong>
                  </h1>
                  <h2 className="my-3">
                    Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum.
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn-get-started">Let's Get To It</NavLink>
                  </div>
                </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={icon} className="img-fluid animated" alt="home img"/>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <img src={icon3} className="img-fluid animated" alt="home img"/>
                    <div className="mt-3">
                      
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <div class="card">
                      <div className="card-body">
                        <h5 className="card-title">New Product, new Story</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum. Fusce placerat dolor id cursus finibus. Aliquam tempus facillis ipsum sit amet molestie. Proin lobortis eros a turpis tempor, sed ornare augue aliquarm. Donec imperdiet nulla ut placerat molestie. In hendreit blandit ante faclisis ultrices. Mauris vulputate metus sit arnet ex dignissm, sed hendreit nuc rhoncus.</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      
      <section>
      <div class="container testimonial-group">
        <div class="row text-center">
        <div class="col-xs-4">Logo</div>
        <div class="col-xs-4">Logo</div>
        <div class="col-xs-4">Logo</div>
        <div class="col-xs-4">Logo</div>

        <div className="row row-cols-1 row-cols-md-3 g-4 w-50">
              <div className="col">
                <div className="card h-100">
                  <img src={icon4} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Blog Title #1</h5>
                    <p className="card-text">Blog excerpt - first lines - for approx two lines</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={icon4} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Blog excerpt - first lines - for approx two lines</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={icon4} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Blog excerpt - first lines - for approx two lines</p>
                  </div>
                </div>
              </div>
            </div>
            <div> </div>
            <section>
            <div className="col">
              <div className="text-center">
                <button type="button" className="btn btn-primary">My button</button>
              </div>
            </div>
            </section>
          </div>
        </div>
      </section>
      <section>
        <footer className="footer">
          <div className="container text-center">
            <div className="text-center p-3" style={{backgroundColor: 'white'}}> 
            <a to="/" className="navbar-brand">
              <img src={icon} height="28" alt="logo"/>
            </a>
              All Rights Reserved: © Ikhokha 
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Home;
