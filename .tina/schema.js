
import { defineSchema, defineConfig } from 'tinacms'
import { client } from './__generated__/client'


const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'
const schema = defineSchema({
  // See https://tina.io/docs/tina-cloud/connecting-site/ for more information about this config
  config: {
    token: '5579fd3f9e2b2280bcfea6252d5bb91842decbe3', // generated on app.tina.io,
    clientId: '73036298-4f71-4b9a-85f1-02b7147b3ac0', // generated on app.tina.io
    branch,
    media: {
      tina: {
          publicFolder: "public",
          mediaRoot: "uploads"
        },
    },
  },
  collections: [
    {
      label: 'Image Galleries',
      name: 'gallery',
      path: 'content/galleries',
      format: 'json',
      fields: [
        {
          type: 'string',
          label: 'title',
          name: 'title',
          isTitle: true,
          required: true,

        },
        {
          type: 'image',
          label: 'Banner Image',
          name: 'banner'
        },
        {
          type: 'string',
          label: 'Description',
          name: 'description'
        },
        {
          type: 'string',
          label: 'Gallery Folder',
          name: 'folder'
        },
      ]
    },
    {
      label: 'Blog Posts',
      name: 'post',
      path: 'content/posts',
      format: 'mdx',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
          isTitle: true,
          required: true,
        },
        {
          type: 'rich-text',
          label: 'Blog Post Body',
          name: 'body',
          isBody: true,
          templates: [
            {
              name: 'PageSection',
              label: 'Page Section',
              fields: [
                {
                  type: 'string',
                  name: 'heading',
                  label: 'Heading',
                },
                {
                  type: 'string',
                  name: 'content',
                  label: 'Content',
                  ui: {
                    component: 'textarea',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
})

export default schema

// Your tina config

export const tinaConfig = defineConfig({
  client,
  schema,
  cmsCallback: (cms) => {
    //  add your CMS callback code here (if you want)

    // The Route Mapper
    /**
     * 1. Import `tinacms` and `RouteMappingPlugin`
     **/
    import('tinacms').then(({ RouteMappingPlugin }) => {
      /**
       * 2. Define the `RouteMappingPlugin` see https://tina.io/docs/tinacms-context/#the-routemappingplugin for more details
       **/
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        return undefined
      })
      /**
       * 3. Add the `RouteMappingPlugin` to the `cms`.
       **/
      cms.plugins.add(RouteMapping)
    })

    return cms
  },
})

