import { getBenches, postBenches } from "../util/bench_api_util";

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

/**
 * @param {{id: number, description: string, lat: number, lon: number}[]} benches
 */
const receiveBenches = benches => {
  return {
    type: RECEIVE_BENCHES,
    benches
  }
};

/**
 * @param {{description: string, lat: number, lon: number}} bench
 */
export const createBench = bench => dispatch => postBenches(bench)
  .then(benches => dispatch(receiveBenches(benches)))

export const fetchBenches = () => dispatch => getBenches()
  .then(benches => dispatch(receiveBenches(benches)))