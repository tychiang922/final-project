import React from 'react';
import AppContext from '../lib/app-context';

export default class BusinessSearch extends React.Component {

  ratingRender() {
    const businessRating = 4.5;
    const fullStar = Math.ceil(businessRating);
    let halfStar = false;
    const array = [...Array(fullStar)];
    if (businessRating % 1 !== 0) {
      halfStar = true;
    }
    return array.map((e, i) => {
      if (i === array.length - 1) {
        if (halfStar) {
          halfStar = false;
          return <i className="fa-solid fa-star-half text-danger"></i>;
        }
      }
      return <i key={i} className="fa-solid fa-star text-danger"></i>;
    });

  }

  render() {
    // const { searchActive } = this.context;
    return (
      <div className="card mob-nav-pos" style={{
        width: '100%',
        borderRadius: '21px 21px 0 0',
        height: '900px',
        backgroundColor: '#001427',
        position: 'absolute',
        top: '5%'
      }}>
        <div className="d-flex justify-content-center">
          <a href="#" className="btn btn-primary" style={{
            marginTop: '1rem',
            width: '3rem',
            padding: 0,
            height: '5px',
            border: 'none',
            textDecoration: 'none',
            backgroundColor: '#525D68'
          }}></a>
        </div>
        <div className='d-flex flex-row justify-content-between px-2 mt-2'>
          <div className='flex-column'>
            <div className='text-white'>
              <h1 style={{
                fontSize: '24px'
              }}>Store Name</h1>
            </div>
            <div className='d-flex text-white'>
              <p className='pe-2'>Category</p>
              <p style={{
                color: '#066AFF'
              }}>Location</p>
            </div>
          </div>
          <div>
            <a href='#' className='d-flex justify-content-center align-items-center' style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              backgroundColor: '#182430',
              textDecoration: 'none'
            }}>
              <i className="fa-solid fa-xmark" style={{
                color: 'white',
                fontSize: '1.5rem'
              }}></i>
            </a>
          </div>
        </div>
        <div className='d-flex flex-row justify-content-center'>
          <button type="button" className="btn btn-primary btn-lg px-5 py-1" style={{
            backgroundColor: '#182430',
            color: '#066AFF',
            border: '0',
            borderRadius: '3rem'
          }}>
            <i className="fa-brands fa-yelp text-danger" ></i>
            &nbsp;&nbsp;Information
          </button>
        </div>
        <div className="d-flex flex-row my-3 ms-1">
          <div className="d-flex flex-column border-end border-secondary ms-1 pe-3">
            <div className="fs-title">Hours</div>
            <div className="fs-caption">
              Open
            </div>
          </div>
          <div className="d-flex flex-column border-end border-secondary ms-1 pe-3">
            <div className="fs-title">Rating</div>
            <div className="fs-caption d-flex flex-row ">
              <p className="mb-0">4.0</p>
              <i className="fa-solid fa-star text-danger mt-1 ms-1"></i>
            </div>
          </div>
          <div className="d-flex flex-column border-end border-secondary ms-1 pe-3">
            <div className="fs-title">Review Count</div>
            <div className="fs-caption">2852</div>
          </div>
          <div className="d-flex flex-column border-end border-secondary ms-1 pe-3">
            <div className="fs-title">Price</div>
            <div className="fs-caption">$$</div>
          </div>
          <div className="d-flex flex-column ms-1 pe-3">
            <div className="fs-title">Transactions</div>
            <div className="fs-caption" style={{
              fontSize: '10px'
            }}>Delivery/Pickup</div>
          </div>
        </div>
        <div className="d-flex flex-row mb-3 mx-2 justify-content-between">
          <img src="https://image.shutterstock.com/shutterstock/photos/1811246308/display_1500/stock-vector-sample-stamp-in-rubber-style-red-round-grunge-sample-sign-rubber-stamp-on-white-vector-1811246308.jpg" className='sample-image'></img>
          <img src="https://image.shutterstock.com/shutterstock/photos/1811246308/display_1500/stock-vector-sample-stamp-in-rubber-style-red-round-grunge-sample-sign-rubber-stamp-on-white-vector-1811246308.jpg" className='sample-image'></img>
          <img src="https://image.shutterstock.com/shutterstock/photos/1811246308/display_1500/stock-vector-sample-stamp-in-rubber-style-red-round-grunge-sample-sign-rubber-stamp-on-white-vector-1811246308.jpg" className='sample-image'></img>
        </div>
        <div className="d-flex justify-content-center">
          <div className="card" style={{
            width: '95%',
            backgroundColor: '#182430'
          }}>
            <div className="card-body py-1 px-0">
              <div className="d-flex flex-row align-items-center">
                <div className="mx-3">
                  <div className="d-flex justify-content-center align-items-center" style={{
                    borderRadius: '50%',
                    height: '2rem',
                    width: '2rem',
                    backgroundColor: '#525D68'
                  }}>
                    <i className="fa-solid fa-phone" style={{
                      color: '#066AFF',
                      fontSize: '1rem'
                    }}></i>
                  </div>
                </div>
                <div className="py-2 border-bottom border-secondary w-100 d-flex align-items-center" style={{
                  color: '#066AFF',
                  fontSize: '20px'
                }}>(777)&nbsp;999-1111</div>
              </div>
              <div className="d-flex flex-row mt-1 align-items-center">
                <div className="mx-3">
                  <div className="d-flex justify-content-center align-items-center" style={{
                    borderRadius: '50%',
                    height: '2rem',
                    width: '2rem',
                    backgroundColor: '#525D68'
                  }}>
                    <i className="fa-solid fa-map-location-dot" style={{
                      color: '#066AFF',
                      fontSize: '1rem'
                    }}></i>
                  </div>
                </div>
                <div className="py-2 w-100 d-flex align-items-center" style={{
                  color: '#066AFF',
                  fontSize: '13px'
                }}>532 Spectrum Center Dr <br /> Irvine, CA 92618</div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion accordion-flush mt-3" id="accordionFlushExample" style={{
          width: '95%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <div className="accordion-item back-gray" >
            <h2 className="accordion-header back-gray" id="flush-headingOne">
              <button className="accordion-button collapsed back-gray py-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <div className="d-flex flex-column mb-0">
                  <div className="hours mb-1">Hours</div>
                  <div className="d-flex flex-row mb-1">
                    <div className="hours-number pe-1">6:00</div>
                    <div className="hours pe-1">AM</div>
                    <div className="hours-number pe-1">-</div>
                    <div className="hours-number pe-1">10:00</div>
                    <div className="hours">PM</div>
                  </div>
                  <div className="close">Closed</div>
                </div>
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse back-gray" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="d-flex flex-row mb-1 px-3 pt-2 justify-content-between">
                <div className="hours-number pe-1">Monday</div>
                <div className="d-flex flex-column mb-0">
                  <div className="d-flex flex-row">
                    <div className="hours-number pe-1">6:00</div>
                    <div className="hours pe-1">AM</div>
                    <div className="hours-number pe-1">-</div>
                    <div className="hours-number pe-1">10:00</div>
                    <div className="hours">PM</div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row mb-1 px-3 pt-2 justify-content-between">
                <div className="hours-number pe-1">Tuesday</div>
                <div className="d-flex flex-column mb-0">
                  <div className="d-flex flex-row">
                    <div className="hours-number pe-1">6:00</div>
                    <div className="hours pe-1">AM</div>
                    <div className="hours-number pe-1">-</div>
                    <div className="hours-number pe-1">10:00</div>
                    <div className="hours">PM</div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row mb-1 px-3 pt-2 justify-content-between">
                <div className="hours-number pe-1">Wednesday</div>
                <div className="d-flex flex-column mb-0">
                  <div className="d-flex flex-row">
                    <div className="hours-number pe-1">6:00</div>
                    <div className="hours pe-1">AM</div>
                    <div className="hours-number pe-1">-</div>
                    <div className="hours-number pe-1">10:00</div>
                    <div className="hours">PM</div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row mb-1 px-3 pt-2 justify-content-between">
                <div className="hours-number pe-1">Thursday</div>
                <div className="d-flex flex-column mb-0">
                  <div className="d-flex flex-row">
                    <div className="hours-number pe-1">6:00</div>
                    <div className="hours pe-1">AM</div>
                    <div className="hours-number pe-1">-</div>
                    <div className="hours-number pe-1">10:00</div>
                    <div className="hours">PM</div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row mb-1 px-3 pt-2 justify-content-between">
                <div className="hours-number pe-1">Friday</div>
                <div className="d-flex flex-column mb-0">
                  <div className="d-flex flex-row">
                    <div className="hours-number pe-1">6:00</div>
                    <div className="hours pe-1">AM</div>
                    <div className="hours-number pe-1">-</div>
                    <div className="hours-number pe-1">10:00</div>
                    <div className="hours">PM</div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row mb-1 px-3 pt-2 justify-content-between">
                <div className="hours-number pe-1">Saturday</div>
                <div className="d-flex flex-column mb-0">
                  <div className="d-flex flex-row">
                    <div className="hours-number pe-1">6:00</div>
                    <div className="hours pe-1">AM</div>
                    <div className="hours-number pe-1">-</div>
                    <div className="hours-number pe-1">10:00</div>
                    <div className="hours">PM</div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row mb-1 px-3 py-2 justify-content-between">
                <div className="hours-number pe-1">Sunday</div>
                <div className="d-flex flex-column mb-0">
                  <div className="d-flex flex-row">
                    <div className="hours-number pe-1">6:00</div>
                    <div className="hours pe-1">AM</div>
                    <div className="hours-number pe-1">-</div>
                    <div className="hours-number pe-1">10:00</div>
                    <div className="hours">PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-white fs-6 ps-2 pt-3' style={{
            fontWeight: 'normal'
          }}>Ratings and Reviews</h2>
          <div className="d-flex justify-content-center">
            <div className="card p-2" style={{
              width: '95%',
              backgroundColor: '#182430'
            }}>
              <div className="card-body py-1 px-0">
                <p className="text-white review-text">This restaurant came highly recommended by my close friend. The wait to be seated for dinner was as expected for a Friday night. Thankfully there are many...</p>
                <div className="d-flex flex-row mb-0 text-white">
                  <div style={{
                    borderRadius: '50%',
                    height: '40px',
                    width: '40x'
                  }}>
                    <img src='https://image.shutterstock.com/shutterstock/photos/1811246308/display_1500/stock-vector-sample-stamp-in-rubber-style-red-round-grunge-sample-sign-rubber-stamp-on-white-vector-1811246308.jpg' className='face-img' />
                  </div>
                  <div className="d-flex flex-column mb-0">
                    <div className="p-0">
                      <this.ratingRender />
                    </div>
                    <div className="d-flex flex-row mb-0 text-white">
                      <div className="p-0">

                      </div>
                      <div className="p-0">Flex item 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BusinessSearch.contextType = AppContext;
