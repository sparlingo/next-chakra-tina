import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Spacer,
  VStack,
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
      <Flex maxW='lg'>
        <Center>
          <Heading as='h2'>
            Journal Entries
          </Heading>
        </Center>
        <Divider orientation='vertical'/>
        <VStack>
          {posts.map((post) => (
            <Box maxW='md' p={5} key={post.node.id}>
              <Heading as='h3'>{post.node.title}</Heading>
            </Box>
          ))}
        </VStack>
      </Flex>
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

