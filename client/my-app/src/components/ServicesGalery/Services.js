import React from "react";
import "./Services.css";
import logo1 from "./logo1.jpg";
import logo2 from "./logo2.jpg";
import logo3 from "./logo3.jpg";
import logo4 from "./logo4.jpg";
import logo5 from "./logo5.jpg";
import logo6 from "./logo6.jpg";
import logo7 from "./logo7.jpg";
import logo8 from "./logo8.jpg";

function Services() {
  return (
    <div className='container-fluid'>
      <div className='px-lg-5'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
            <div className='bg-white rounded shadow-sm'>
              <img src={logo1} alt='' className='img-fluid card-img-top' />
              <div className='p-4'>
                <h5>
                  {" "}
                  <p className='text-dark' className='font-weight-bold'>
                    Pediatric Physiotherapy
                  </p>
                </h5>
                <p className='medium text-muted mb-0'>
                  Our services include physiotherapy from the smllest ages (0
                  months) to children to the age of 16. Treatments are adressed
                  to a variety of issues like: orthopedic, neurology, genetic
                  diseases, autism etc.
                </p>
              </div>
            </div>
          </div>

          <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
            <div className='bg-white rounded shadow-sm'>
              <img src={logo2} alt='' className='img-fluid card-img-top' />
              <div className='p-4'>
                <h5>
                  {" "}
                  <p className='text-dark' className='font-weight-bold'>
                    Adults and geriatric phisiotherapy
                  </p>
                </h5>
                <p className='medium text-muted mb-0'>
                  We treat a variety of affections from orthopedic issues, post
                  operatory treatment, neurologic issues and also prevention
                  services. Every patient will benefit from a personalised
                  exercise program and individual sessions.
                </p>
              </div>
            </div>
          </div>

          <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
            <div className='bg-white rounded shadow-sm'>
              <img src={logo3} alt='' className='img-fluid card-img-top' />
              <div className='p-4'>
                <h5>
                  {" "}
                  <p className='text-dark' className='font-weight-bold'>
                    Electrotherapy
                  </p>
                </h5>
                <p className='medium text-muted mb-0'>
                  The electrotherapy services are provided with the help of the
                  latest technology. Our devices are used for pain relief,
                  reduce inflamation, limfatic drainige, improve circulation or
                  muscle stimulation. Treatments are applied according to the
                  diagnosis.
                </p>
              </div>
            </div>
          </div>

          <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
            <div className='bg-white rounded shadow-sm'>
              <img src={logo4} alt='' className='img-fluid card-img-top' />
              <div className='p-4'>
                <h5>
                  {" "}
                  <p
                    href='#'
                    className='text-dark'
                    className='font-weight-bold'
                  >
                    Massage therapy
                  </p>
                </h5>
                <p className='medium text-muted mb-0'>
                  Massage therapy is used as a complementary treatment, alonside
                  physiotherapy and electrotherapy. It gas benefits in reducing
                  pain, reducing muscle contractures, stimulates circulation and
                  also for relaxation. The type of massage is chosen acroding to
                  the dianosis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='px-lg-5'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
            <div className='bg-white rounded shadow-sm'>
              <img src={logo5} alt='' className='img-fluid card-img-top' />
            </div>
          </div>

          <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
            <div className='bg-white rounded shadow-sm'>
              <img src={logo6} alt='' className='img-fluid card-img-top' />
            </div>
          </div>

          <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
            <div className='bg-white rounded shadow-sm'>
              <img src={logo7} alt='' className='img-fluid card-img-top' />
            </div>
          </div>

          <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
            <div className='bg-white rounded shadow-sm'>
              <img src={logo8} alt='' className='img-fluid card-img-top' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
