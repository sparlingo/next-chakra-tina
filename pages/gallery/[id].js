import React, {useState, useCallback} from 'react'

import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import Gallery from "react-photo-gallery-next"

import {getMyAlbums, getAlbum} from '../api/pexels'

export default function gallery({data}) {
  const content = data
  console.log(content)


  if (content && content[0].type == 'Video') {
    return (
      <Text>Video here</Text>
      // <AspectRatio maxW='560px' ratio={1}>
      //   <iframe
      //     title='naruto'
      //     src={content[0].video_files}
      //     allowFullScreen
      //   />
      // </AspectRatio>
      // <Image src={content[0].video} alt="Blah"/>
    )
  } else {
    return (
      <Flex px="1rem" width="full" spacing={6} justify="space-between">
        {content.map((pic) => (
          <Box
            key={pic.id}
            boxShadow="base"
            rounded="10px"
            overflow="hidden"
            bg="white"
            ml={2}
            lineHeight="0"
            _hover={{ boxShadow: "dark-lg" }}
          >
            <Image src={pic.src.large || pic.image} alt={pic.url} />
          </Box>
        ))}
      </Flex>
    )
  }
}

export const getStaticPaths = async () => {
  const albums = await getMyAlbums()
  const paths = albums.map((album) => ({
    params: {
      id: album.id,
      title: album.title 
    }
  }))
  //console.log(paths)
  return {
    paths,
    fallback: "blocking",
  }
}


export async function getStaticProps({ params }) {
  //console.log(params)
  const data = await getAlbum(params.id)

  return {
    props: {
      data,
    },
  }
}