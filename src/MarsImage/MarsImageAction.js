const API_KEY = 'Kh56vzgIHaaVjS035aOSnAGid6MNrpNsWvR6Cm3e'

const STORE_DATA = new Symbol('STORE_DATA')

function getData(date) {
  return dispatch => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`
    )
      .then(r => r.json())
      .then(data => {
        if (!data.photos || data.photos.length < 1) throw new Error('No data')

        const payload = data.photos.map(
          ({ id, img_src, earth_date, camera: { full_name } }) => ({
            id,
            img_src,
            earth_date,
            full_name
          })
        )
        dispatch(storeData(payload))
      })
  }
}

function storeData(payload) {
  return {
    type: STORE_DATA,
    payload
  }
}

export { STORE_DATA, getData, storeData }
