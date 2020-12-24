export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fe44c2ca33d90ed00e22959',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8e6r9a12',
                  apiId: '07ccb4ef-88ee-4c80-b19a-3854e5ee7794'
                },
                {
                  buildHookId: '5fe44c2c93c2cced92f54b31',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-d97pjr7m',
                  apiId: 'cd287b74-f1f9-40b8-92ae-ada4818cbf56'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Naveenkariyappa/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-d97pjr7m.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
