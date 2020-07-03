module.exports = {
  siteMetadata: {
    title: `Alluminy · Esquadrias de Alumínio`,
    description: `A Alluminy é uma empresa que atua há mais de 15 anos no mercado de fabricação e instalação de esquadrias de alumínio sob medida, e atende projetos dos mais variados tipos, que incluem edifícios residenciais, comerciais, industriais, além de residências de alto e médio padrão, clubes, academias, entre outros.`,
    author: `@raonidemarchi`,
    url: `https://alluminy.com.br`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -100,
      },
    },
  ],
}
