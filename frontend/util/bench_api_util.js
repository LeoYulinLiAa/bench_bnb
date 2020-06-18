export const getBenches = () => {
  return $.ajax({
    url: '/api/benches',
    error: err => console.log(err)
  });
};

export const getBenchesInBound = (bound) => {
  const { lat: south, lng: west } = bound.getSouthWest();
  const { lat: north, lng: east } = bound.getNorthEast();
  return $.ajax({
    url: `/api/benches`,
    data: { south, west, north, east }
  });
}

/**
 * @param {{description: string, lat: number, lon: number}} bench
 */
export const postBenches = bench => {
  return $.ajax({
    url: '/api/benches',
    data: { bench },
    error: err => console.log(err)
  });
};