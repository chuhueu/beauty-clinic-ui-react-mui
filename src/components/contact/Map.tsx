import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"

const Map = () => {
  return (
    <div>
      <GoogleMap
          defaultZoom={2}
          defaultCenter={{ lat: -21.030610, lng: 105.785690 }}
        >
            <Marker position={{ lat: -21.030610, lng: 105.785690 }} />
      </GoogleMap>
    </div>
  );
}

export default withScriptjs(withGoogleMap(Map));