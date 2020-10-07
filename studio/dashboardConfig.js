export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f7d6316af7f35c1714a7bf1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xtpzmn88',
                  apiId: '57d7ac3a-e734-4311-85d5-51afad57c7a0'
                },
                {
                  buildHookId: '5f7d63165b9435a275435ffb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-cugp9it5',
                  apiId: 'b6901a03-0953-4454-b72d-de96baff231a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TMH-SE/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-cugp9it5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
