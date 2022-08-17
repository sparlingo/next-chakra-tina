//import { join } from 'path'
//import { fs } from 'fs'
import {
  Box,
  Heading,
  Text
} from '@chakra-ui/react'
import { useTina } from "tinacms/dist/edit-state"
import { client } from "../../.tina/__generated__/client"

export default function gallery(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data.gallery,
  })
  //console.log(data)

  return (
    <Box>
      <Heading as='h2'>
        {data.title}
      </Heading>
      <Text>
        {data.description}
      </Text>
    </Box>
  )
}



export const getStaticPaths = async () => {
  const { data } = await client.queries.galleryConnection()
  const paths = data.galleryConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } }
  })

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.gallery({
    relativePath: ctx.params.slug + '.json',
  })
  //const images = fs.readdir()
  //console.log(data)

  return {
    props: {
      data,
      query,
      variables,
    },
  }
}