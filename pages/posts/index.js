import {
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react'
import { client } from "../../.tina/__generated__/client"

export default function PostList(props) {

  const { data } = ({
    data: props.data.postConnection
  })
  const posts = data.edges
  //console.log(posts)
  return (
    <>
      <Heading as='h2'>
        Journal Entries
      </Heading>
      {posts.map((post) => (
        <Box key={post.node.id}>
          <p>{post.node.title}</p>
        </Box>
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.postConnection()
  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  }
}

