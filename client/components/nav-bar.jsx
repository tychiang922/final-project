import React from 'react';

export default class NavBar extends React.Component {

  renderMobileBar() {
    return (
      <div>
        <div className="card" style={{ width: '100%', borderRadius: '21px', height: '900px', backgroundColor: '#001427' }}>
            <div className="card-body">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
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
