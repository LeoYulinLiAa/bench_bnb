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

  return <ol className="bench-list">
    { benches.map(bench => {
      return <li key={`bench-${bench.id}`} id={`bench-${bench.id}`}>
        <div className="bench-list-item">
          <h3>{bench.description}</h3>
          {bench.lat}, {bench.lon}
        </div>
      </li>
    }) }
  </ol>

};

export default BenchIndex;