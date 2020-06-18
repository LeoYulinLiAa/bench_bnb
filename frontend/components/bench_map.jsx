import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBenchesInBound } from "../actions/bench_actions";
import debounce from 'lodash.debounce';

const BenchMap = () => {

  let map = null;

  const [bound, setBound] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (bound) dispatch(fetchBenchesInBound(bound));
  }, [bound]);

  useEffect(() => {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
    const map = new google.maps.Map(document.getElementById("map-container"), mapOptions);

    const updateBound = debounce(() => {
      setBound(map.getBounds());
    }, 200);

    google.maps.event.addListener(map, 'bounds_changed', updateBound);

    const mark = new google.maps.Marker({
      map,
      position: { lat: 37.7758, lng: -122.435 },
      label: "SF?"
    });

    google.maps.event.addListener(mark, 'mouseover', () => {
      console.log("no!");
    });

  }, []);

  return <div>
    <div id='map-container'>

    </div>
    <p>{JSON.stringify(bound)}</p>
  </div>
}

export default BenchMap;