import React from 'react';
import AppContext from '../lib/app-context';

export default class MobileNavBar extends React.Component {
  render() {
    const { handleSubmit, handleChange } = this.context;
    return (
        <div>
          <div className="card mob-nav-pos" style={{
            width: '100%',
            borderRadius: '21px 21px 0 0',
            height: '900px',
            backgroundColor: '#001427',
            position: 'absolute',
            top: '85%'
          }}>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <a href="#" className="btn btn-primary" style={{
                  marginBottom: '2rem',
                  width: '3rem',
                  padding: 0,
                  height: '5px',
                  border: 'none',
                  textDecoration: 'none',
                  backgroundColor: '#525D68'
                }}></a>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3 ">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1" style={{
                      border: 'none',
                      backgroundColor: '#182430',
                      borderRadius: '10px 0 0 10px'
                    }}>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </div>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Search Categories"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    style={{
                      border: 'none',
                      backgroundColor: '#182430',
                      borderRadius: '0 10px 10px 0'
                    }} />
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export class DesktopNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchActive: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      searchActive: !prevState.searchActive
    }));
  }

  render() {
    return (
      <nav className="nav flex-column desk-nav-pos" style={{
        backgroundColor: '#11314F',
        height: '100vh',
        width: '5rem',
        overflow: 'visible'
      }}>
          <form onSubmit={this.props.onSubmit}>
            <div className= {`input-group mb-3 desk-card ${this.state.searchActive ? 'desk-card-active' : ''}`} style={{
              paddingTop: '2rem',
              paddingLeft: '1rem'
            }}>
              <div className="input-group-prepend ">
                <span className={`input-group-text desk-search-icon ${this.state.searchActive
                      ? 'dsi-active'
                      : ''}`}
                      id="basic-addon1" style={{
                        border: 'none',
                        borderRadius: '10px 0 0 10px'
                      }}>
                  <a className="nav-link pad-0" href="#" onClick={this.toggle}>
                    <i className={`fa-solid fa-magnifying-glass desk-search-icon-color ${this.state.searchActive
                      ? 'dsic-active'
                      : ''}`}></i>
                  </a>
                </span>
              </div>
              <input
                required
                type="text"
                className={`form-control opac ${this.state.searchActive ? 'opac-active' : ''}`}
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
