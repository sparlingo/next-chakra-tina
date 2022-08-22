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
  const newPic = Object.keys(res)
  // Constuct the photos object to return to the photo gallery
  // const photos = res.forEach(pic => ({
  //   src: pic.src.original,
  //   height: pic.src.height / 1152,
  //   width: pic.src.width / 1152
  // }))
  // let photos = res.map(pic => {
  //   if(pic.type == 'Photo') {
  //     return {
  //       ...pic, 
  //       height: pic.height/1152, 
  //       width: pic.width/1152,
  //       src: pic.src.original
  //     }
  //   }
  // })
  //console.log(typeof(res))
  // let newPic = responseJson.map((item) => ({
  //   width: item.width,
  //   height: item.height
  // }))
  const responseJson = await res.json()
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