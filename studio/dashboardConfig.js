export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-downtown-studio',
                  apiId: 'de8d7f6b-f910-429e-873d-dd9fc6f8a086'
                },
                {
                  buildHookId: '6156ba61cc01258ec8d0545b',
                  title: 'Events Website',
                  name: 'sanity-nuxt-downtown',
                  apiId: '2c3c9608-eadf-4ee5-a54e-9e758447da97'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BramSchrooyen/sanity-nuxt-downtown',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-downtown.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
