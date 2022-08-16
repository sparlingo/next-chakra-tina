import React, {useState} from 'react'
import {
  Box,
  Container,
  Heading,
  Image,
} from "@chakra-ui/react"
import { client } from '../../.tina/__generated__/client'

//import Carousel from '../../components/Carousel'

//import {getCuratedPhotos} from './api/pexels'

export default function Home(props) {
  const { data } = ({
    data: props.data.galleryConnection
  })
  const galleries = data.edges
  console.log(galleries)
  

  //const [photos] = useState(data)
  //console.log(data)
  return (
    <>
      {galleries.map((gallery) => (
        <Box key={gallery.node.id}>
          <Heading as='h3'>
            {gallery.node.title}
          </Heading>
        </Box>
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.galleryConnection()
  return {
    props: {
      data,
      query,
      variables
    }
  }
}
// export async function getServerSideProps() {
//   const data = await getCuratedPhotos()
//   return {
//     props: {
//       data,
//     },
//   }
// }