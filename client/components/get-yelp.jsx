
export default function getYelp(latitude, longitude, category) {
  return new Promise((resolve, reject) => {
    const term = `&category=${category}`;
    fetch(`/yelp/nearby?lat=${latitude}&lng=${longitude}${term}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(result => {
        resolve(result.jsonBody.businesses);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getYelpById(id) {
  return new Promise((resolve, reject) => {
    fetch(`/yelp/business/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getYelpReview(id) {
  return new Promise((resolve, reject) => {
    fetch(`/yelp/business/review/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
}
