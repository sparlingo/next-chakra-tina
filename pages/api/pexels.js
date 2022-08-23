const API_KEY = process.env.PEXELS_API

export const getMyAlbums = async () => {
  const res = await fetch(
    `https://api.pexels.com/v1/collections`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  )

  const responseJson = await res.json()
  //console.log(responseJson.collections)
  return responseJson.collections
}

export const getAlbum = async(id) => {
  const res = await fetch(
    `https://api.pexels.com/v1/collections/${id}`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  )
  const responseJson = await res.json()
  console.log(responseJson)
  return responseJson.media
}

export const getPhotoById = async (id) => {
  const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
    headers: {
      Authorization: API_KEY,
    },
  })
  const responseJson = await res.json()
  return responseJson
}