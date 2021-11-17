import React from 'react';
import { NavLink } from 'react-router-dom';
import icon3 from '../src/images/ICONPAGE3.png';

function About() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <img src={icon3} className="img-fluid animated" alt="home img"/>
                    <div className="mt-3">
                      <NavLink to="/service" className="btn-get-started">Let's Get To It</NavLink>
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
    </>
  );
}

export default About;
