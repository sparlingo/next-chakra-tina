import React, {useState} from 'react'
import {
  Box,
  Container,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
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
      <SimpleGrid columns={2} spacing={8}>
        {galleries.map((gallery) => (
          <Box>
            <Box
              key={gallery.node.id}
              bg='gray.200'
              mb={8}
              maxW='xs'
              minW='250px'
              maxH="450px"
              borderWidth='1px'
              borderRadius='lg'
              overflow='hidden'
            >
              <Image
                src={gallery.node.banner}
                alt="Gallery Hero Image"
                boxSize='320px'
                fit="contain"
                />
              <Box p={4}>
                <Heading as='h3' lineHeight='tight'>
                  {gallery.node.title}
                </Heading>
                <Text>
                  {gallery.node.description}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      
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