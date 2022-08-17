import React, {useState} from 'react'
// import {
//   Link
// } from 'next/link'
import {
  Box,
  Container,
  Center,
  Flex,
  Grid,
  GridItem,
  Link,
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
  //console.log(galleries)
  

  //const [photos] = useState(data)
  return (
    <>
      <SimpleGrid columns={2} spacing={8}>
        {galleries.map((gallery) => (
          <Box key={gallery.node.id}>
            <Link href={`gallery/${gallery.node.folder}`}>
              <Box
                bg='gray.200'
                mb={8}
                maxW='xs'
                minW='250px'
                maxH="450px"
                minH="450px"
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
                shadow="base"
              >
                <Image
                  src={gallery.node.banner}
                  alt="Gallery Hero Image"
                  boxSize='250px'
                  fit="cover"
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
            </Link>
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