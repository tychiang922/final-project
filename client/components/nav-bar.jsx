import React from 'react';

export default class MobileNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ category: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div className="card" style={{
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
                  onChange={this.handleChange}
                  style={{
                    border: 'none',
                    backgroundColor: '#182430',
                    borderRadius: '0 10px 10px 0'
                  }} />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

// export class DesktopNavBar extends React.Component {
//   render() {
//     return (
//       <nav className="nav flex-column">
//         <a className="nav-link active" href="#">Active</a>
//         <a className="nav-link" href="#">Link</a>
//         <a className="nav-link" href="#">Link</a>
//         <a className="nav-link disabled" href="#">Disabled</a>
//       </nav>
//     );
//   }
// }
