import React from 'react';

export default class Loading extends React.Component {
  render() {
    const { isLoading } = this.props;
    if (!isLoading) {
      return null;
    }
    return (
      <div className='position-absolute w-100 h-100' style={{
        top: '1rem',
        right: '1rem'
      }}>
        <div className="d-flex justify-content-end">
          <div className="spinner-border text-success fs-1" role="status" style={{
            width: '5rem',
            height: '5rem'
          }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}
