const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://airfoil-docs.teamairship.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    // logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: '/',
    // title:
    //   "<a href='https://hasura.io/learn/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/teamairship/airfoil-docs',
    helpUrl: 'https://github.com/teamairship/airfoil-docs/issues',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/teamairship" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Airship LLC', link: 'https://teamairship.com/' }],
    frontline: false,
    ignoreIndex: true,
    title: "<a href='/'>CLI DOCS</a>",
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/teamairship/airfoil-docs/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
