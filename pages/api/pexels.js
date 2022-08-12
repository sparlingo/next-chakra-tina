const API_KEY = process.env.PEXELS_API

export const getCuratedPhotos = async () => {
  const res = await fetch(
    `https://api.pexels.com/v1/curated`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  )
  const responseJson = await res.json()
  return responseJson.photos
}