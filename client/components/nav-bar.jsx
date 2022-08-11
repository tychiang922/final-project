import React from 'react';
import AppContext from '../lib/app-context';

export default class MobileNavBar extends React.Component {
  render() {
    const { handleSubmit, handleChange } = this.context;
    return (
      <div className="card mob-nav-pos" style={{
        width: '100%',
        borderRadius: '21px 21px 0 0',
        height: '900px',
        backgroundColor: '#001427',
        position: 'absolute',
        top: '85%'
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
        <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <div className="input-group mb-3" style={{
            margin: '1.5rem',
            width: '80%'
          }}>
            <span className="input-group-text" id="basic-addon1" style={{
              backgroundColor: '#182430',
              border: 0
            }}>
              <i className="fa-solid fa-magnifying-glass" style={{
                color: '#757E86'
              }} ></i>
            </span>
            <input type="text" onChange={handleChange} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" style={{
              backgroundColor: '#182430',
              border: 0,
              color: '#757E86'
            }} />
          </div>
        </div>
        </form>
      </div>
    // <div>
    // <div className="card mob-nav-pos" style={{
    //   width: '100%',
    //   borderRadius: '21px 21px 0 0',
    //   height: '900px',
    //   backgroundColor: '#001427',
    //   position: 'absolute',
    //   top: '85%'
    // }}>
    //     <div className="card-body">
    //       <div className="d-flex justify-content-center">
    //         <a href="#" className="btn btn-primary" style={{
    //           marginBottom: '2rem',
    //           width: '3rem',
    //           padding: 0,
    //           height: '5px',
    //           border: 'none',
    //           textDecoration: 'none',
    //           backgroundColor: '#525D68'
    //         }}></a>
    //       </div>
    //       <form onSubmit={handleSubmit}>
    //         <div className="input-group mb-3 ">
    //           <div className="input-group-prepend">
    //             <span className="input-group-text" id="basic-addon1" style={{
    //               border: 'none',
    //               backgroundColor: '#182430',
    //               borderRadius: '10px 0 0 10px'
    //             }}>
    //               <i className="fa-solid fa-magnifying-glass"></i>
    //             </span>
    //           </div>
    //           <input
    //             required
    //             type="text"
    //             className="form-control"
    //             placeholder="Search Categories"
    //             aria-label="Username"
    //             aria-describedby="basic-addon1"
    //             onChange={handleChange}
    //             style={{
    //               border: 'none',
    //               backgroundColor: '#182430',
    //               borderRadius: '0 10px 10px 0'
    //             }} />
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    );
  }
}

export class DesktopNavBar extends React.Component {
  render() {
    return (
      <nav className="nav flex-column desk-nav-pos" style={{
        backgroundColor: '#11314F',
        height: '100vh',
        width: '5rem',
        overflow: 'visible'
      }}>
          <form onSubmit={this.props.onSubmit}>
          <div className={`input-group mb-3 desk-card ${this.props.searchActive ? 'desk-card-active' : 'desk-card-active desk-card-unactive'}`} style={{
            paddingTop: '2rem',
            paddingLeft: '1rem'
          }}>
              <div className="input-group-prepend ">
                <span className={`input-group-text desk-search-icon ${this.props.searchActive
                      ? 'dsi-active'
                      : 'dsi-active dsi-unactive'}`}
                      id="basic-addon1" style={{
                        border: 'none',
                        borderRadius: '10px 0 0 10px'
                      }}>
                  <a className="nav-link pad-0" href="#" onClick={this.props.toggle}>
                    <i className={`fa-solid fa-magnifying-glass desk-search-icon-color ${this.props.searchActive
                      ? 'dsic-active'
                      : 'dsic-unactive'}`}></i>
                  </a>
                </span>
              </div>
              <input
                required
                type="text"
                className={`form-control opac ${this.props.searchActive ? 'opac-active' : 'opac-active opac-unactive'}`}
                placeholder="Search Categories"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={this.props.onChange}
                style={{
                  border: 'none',
                  backgroundColor: 'white',
                  borderRadius: '0 10px 10px 0'
                }} />
            </div>
          </form>

      </nav>
    );
  }
}

MobileNavBar.contextType = AppContext;
