export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9b95cdec86c036f09a2a89',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-28txc7se',
                  apiId: '688a97bb-f81a-4a11-b211-336f52905d1a'
                },
                {
                  buildHookId: '5d9b95cd85ed980417049068',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-nhmaom97',
                  apiId: '8a252829-4a14-4fcc-84e6-ed022da4c179'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajonp/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-nhmaom97.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
