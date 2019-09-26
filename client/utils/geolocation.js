import loadGoogleMapsApi from 'load-google-maps-api';

export const createMap = (props, elementId, zoom=15) => {
  loadGoogleMapsApi({key: process.env.GOOGLE_MAPS_API_KEY}).then(maps => {
    new google.maps.Map(document.getElementById(elementId), {
      center: {
        lat: props.latitude,
        lng: props.longitude,
      },
      zoom,
    })
  }).catch(err => {
    console.error(err);
  })
}