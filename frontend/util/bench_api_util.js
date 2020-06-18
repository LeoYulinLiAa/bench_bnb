export const getBenches = () => {
  return $.ajax({
    url: '/api/benches',
    error: err => console.log(err)
  })
}

/**
 * @param {{description: string, lat: number, lon: number}} bench
 */
export const postBenches = bench => {
  return $.ajax({
    url: '/api/benches',
    data: { bench },
    error: err => console.log(err)
  })
}