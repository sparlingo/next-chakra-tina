//import ReactMarkdown from 'react-markdown'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import {
  Heading
} from '@chakra-ui/react'
import { useTina } from "tinacms/dist/edit-state"
import { client } from "../../.tina/__generated__/client"


export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data.post,
  })

  return (
    <div>
      <Heading as='h2'>
        {data.title}
      </Heading>
      <main>
        <TinaMarkdown content={data.body} />
      </main>
    </div>
  )
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.postConnection()
  const paths = data.postConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } }
  })

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.post({
    relativePath: ctx.params.slug + ".mdx",
  })

  return {
    props: {
      data,
      query,
      variables,
    },
  }
}