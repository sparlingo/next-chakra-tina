import React, {useState} from 'react'
import {
  Container,
  Image,
} from "@chakra-ui/react"
import Carousel from '../components/Carousel'

import {getCuratedPhotos} from './api/pexels'

export default function Home({data}) {
  const [photos] = useState(data)
  //console.log(data)
  return (
    <Container maxW="4xl">
      {/* {
        photos.map((pic) => (
          <Image
            src={pic.src.portrait}
            height={600}
            width={400}
            alt={pic.url}
          />
        ))
      } */}
      <Carousel images={photos} />
    </Container>
  )
}

export async function getServerSideProps() {
  const data = await getCuratedPhotos()
  return {
    props: {
      data,
    },
  }
}