import {
  AspectRatio,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react'

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
      <Wrap px="1rem" spacing={4}>
        {content.map((pic) => (
          <WrapItem
            key={pic.id}
            boxShadow="base"
            rounded="20px"
            overflow="hidden"
            bg="white"
            lineHeight="0"
            _hover={{ boxShadow: "dark-lg" }}
          >
            <Image src={pic.src.portrait} height={600} width={600} alt={pic.url} />
          </WrapItem>
        ))}
      </Wrap>
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