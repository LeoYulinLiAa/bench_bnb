import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchBenches } from "../actions/bench_actions";
import { benchesSelector } from "../store/selectors";

const BenchIndex = () => {

  const benches = /** @type {{id: number, description: string, lat: number, lon: number}[]} */ useSelector(benchesSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBenches());
  }, []);

  return <ul>
    { benches.map(bench => {
      return <li>{bench.description} - {bench.lat}, {bench.lon}</li>
    }) }
  </ul>

};

export default BenchIndex;