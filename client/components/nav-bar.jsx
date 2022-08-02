import React from 'react';

export default class NavBar extends React.Component {

  renderMobileBar() {
    return (
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
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" style={{
                  border: 'none',
                  backgroundColor: '#182430',
                  borderRadius: '0 10px 10px 0'
                }} />
              </div>
            </div>
        </div>
      </div>
    );
  }

  render() {
    return <this.renderMobileBar />;
  }
}
