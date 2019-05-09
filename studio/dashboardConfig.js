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
                  buildHookId: '5cd3e89163a2f2fbd9bcf269',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-test-studio',
                  apiId: 'aaead826-bddb-480e-baee-94f301174d6a'
                },
                {
                  buildHookId: '5cd3e8919e287ab4c1243884',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-test',
                  apiId: 'ae829649-4531-45e4-b8bc-92110630f62a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kristofferj/sanity-nextjs-landing-pages-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-test.netlify.com', category: 'apps'}
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
