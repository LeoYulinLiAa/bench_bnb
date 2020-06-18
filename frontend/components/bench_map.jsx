import React, { useEffect, useRef } from "react";

const BenchMap = () => {

  useEffect(() => {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
    new google.maps.Map(document.getElementById("map-container"), mapOptions);
  }, [])

  return <div id='map-container'>

  </div>
}

export default BenchMap;