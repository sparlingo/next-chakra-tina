import Layout from "../../components/Layout"
import { useTina } from "tinacms/dist/edit-state"
import { client } from "../../.tina/__generated__/client"

export default function PostList(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })
  console.log(data)
  return (
    <Layout>
      <h1>Posts</h1>
      <div>
        {data.postConnection.edges.map(( {node} ) => (
          <div key={node.id}>
            {/* <Link href={`/posts/${post.node._sys.filename}`}>
              <a>{post.node._sys.filename}</a>
            </Link> */}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.postConnection()
  //console.log(data)
  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  }
}

