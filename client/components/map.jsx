import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const id = ['c3caed1a16123b9f'];
const key = process.env.MAPS_API_KEY;
let defaultLocation = { lat: 40.756795, lng: -73.954298 };

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: null,
      latitude: null,
      mobile: null,
      places: [],
      category: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderMarkers() {
    if (this.state.latitude || this.state.longitude) {
      const iconMarker = new window.google.maps.MarkerImage(
        'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        null,
        null,
        null,
        new window.google.maps.Size(50, 50)
      );
      return this.state.places.map((value, id) => {
        defaultLocation = { lat: value.coordinates.latitude, lng: value.coordinates.longitude };
        return <Marker icon={ iconMarker }key={value.id} position={defaultLocation} />;
      });
    } else {
      return null;
    }
  }

  renderMap() {
    const { latitude, longitude, mobile } = this.state;
    if (latitude || longitude) {
      defaultLocation = { lat: latitude, lng: longitude };
    }
    return (
      <LoadScript googleMapsApiKey={key} mapIds={id} >
        <GoogleMap
          center={defaultLocation}
          zoom={15}
          options={{
            mapId: 'c3caed1a16123b9f',
            mapTypeControl: false,
            zoomControl: !mobile,
            disableDefaultUI: true
          }}
          mapContainerClassName='map-container'
        >
          <Marker position={defaultLocation} />
          {this.renderMarkers()}
        </GoogleMap>
      </LoadScript>
    );
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ category: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ category: value });
  }

  componentDidMount() {
    let yelpTerm = 'food';
    if (this.state.category) {
      yelpTerm = this.state.category;
      this.setState({ category: '' });
    }
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ longitude: position.coords.longitude, latitude: position.coords.latitude });
      fetch(`/yelp/nearby?lat=${position.coords.latitude}&lng=${position.coords.longitude}&category=${yelpTerm}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(result => {
          this.setState({ places: result.jsonBody.businesses });
        });
    });
    const { innerWidth: windowWidth } = window;
    if (windowWidth < 600) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false });
    }
  }

  render() {
    return (
      <div>
        {this.renderMap()}
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
      </div>
    );
  }
}
