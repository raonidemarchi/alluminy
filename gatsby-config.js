module.exports = {
  pathPrefix: `/alluminy`,
  siteMetadata: {
    title: `Alluminy · Esquadrias de Alumínio`,
    description: `A Alluminy é uma empresa que atua há mais de 15 anos no mercado de fabricação e instalação de esquadrias de alumínio sob medida, e atende projetos dos mais variados tipos, que incluem edifícios residenciais, comerciais, industriais, além de residências de alto e médio padrão, clubes, academias, entre outros.`,
    author: `@raonidemarchi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
