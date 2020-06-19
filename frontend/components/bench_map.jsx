import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBenchesInBound } from "../actions/bench_actions";
import debounce from 'lodash.debounce';
import { benchesSelector } from "../store/selectors";

const BenchMap = () => {


  const [bound, setBound] = useState(null);
  const [googleMap, setGoogleMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  const dispatch = useDispatch();

  const benches = useSelector(benchesSelector);

  useEffect(() => {
    if (bound) dispatch(fetchBenchesInBound(bound));
  }, [bound]);

  useEffect(() => {

    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    const map = new google.maps.Map(document.getElementById("map-container"), mapOptions);
    setGoogleMap(map);

    const updateBound = debounce(() => {
      setBound(map.getBounds());
    }, 500);

    google.maps.event.addListener(map, 'bounds_changed', updateBound);

  }, []);

  useEffect(() => {
    markers.forEach(marker => marker.setMap(null));
    const newMarkers = [];
    benches.forEach((bench, idx) => {
      const {lat, lon: lng} = bench
      const mark = new google.maps.Marker({
        map: googleMap,
        position: { lat, lng },
        label: `${idx + 1}`
      });
      newMarkers.push(mark);
      google.maps.event.addListener(mark, 'mouseover', () => {
        console.log(bench.id);
      });
    });
    setMarkers(newMarkers);
  }, [JSON.stringify(benches)])

  return <div>
    <div id='map-container'>

    </div>
    <p>{JSON.stringify(bound)}</p>
  </div>
}

export default BenchMap;