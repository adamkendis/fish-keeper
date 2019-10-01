import loadGoogleMapsApi from 'load-google-maps-api';

export const createMap = (props, mapElementId, zoom=15) => {
  loadGoogleMapsApi({key: process.env.GOOGLE_MAPS_API_KEY})
    .then(maps => {
      new google.maps.Map(document.getElementById(mapElementId), {
        center: {
          lat: props.latitude,
          lng: props.longitude,
        },
        zoom,
      })
    })
    .catch(err => {
      console.error(err);
    })
};

export const getPosition = (options) => {
  if (navigator.geolocation) {      
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options));
  } else {
    return new Promise(resolve => resolve({}));
  }
};

export const processPosition = (position) => {
  let {latitude, longitude, altitude, accuracy, altitudeAccuracy, heading} = position.coords;
  let timestamp = new Date(position.timestamp).toLocaleString();
  let locInfo = {latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, timestamp};
  console.log(locInfo)
  return locInfo;
};





