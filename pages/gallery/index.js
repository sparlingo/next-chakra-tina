import React, {useState} from 'react'
import {
  Badge,
  Center,
  GridItem,
  Link,
  Heading,
  Image,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react"
//import { client } from '../../.tina/__generated__/client'

import {getMyAlbums} from '../api/pexels'

export default function Home({data}) {
  const [albums, setAlbums] = useState(data)
  //console.log(albums)

  return (
    <>
      <Heading as="h2">Photo/Video Albums</Heading>
      <SimpleGrid 
        columns={3} 
        px="1rem" 
        spacing={4} 
        justify="center"
        mb={6}
        mt={8}
      >
        {albums.map((album) => (
          <GridItem
            key={album.id}
            boxShadow="base"
            rounded="20px"
            overflow="hidden"
            bg="white"
            pb={4}
            minW="150px"
            lineHeight="0"
            borderWidth='1px'
            borderRadius='lg'
            _hover={{ boxShadow: "dark-lg" }}
          >
            <Link href={`/gallery/${album.id}`}>
              <Center>
                <Heading as="h3" mt={2} mb={2}>
                  {album.title}
                </Heading>
              </Center>                
                <Stack direction='row' mt={3}>
                  <Badge>{album.photos_count} Photos</Badge>
                  <Badge>{album.videos_count} Videos</Badge>
                </Stack>
            </Link>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  )
}

export async function getServerSideProps() {
  const data = await getMyAlbums()
  //console.log(data)
  return {
    props: {
      data,
    },
  }
}