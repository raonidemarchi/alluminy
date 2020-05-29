import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { googleSiteVerificationCode } from "../constants"
import favicon from "../images/favicon.png"

function Head({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            image
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaImage = `${site.siteMetadata.url}${site.siteMetadata.image}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      script={[
        {
          src: `https://kit.fontawesome.com/9a48c7250f.js`,
          crossorigin: `anonymous`,
        },
      ]}
      link={[
        {
          rel: `icon`,
          type: `image/png`,
          href: favicon,
        },
      ]}
      meta={[
        {
          name: `title`,
          content: metaTitle,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.url,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:url`,
          content: site.siteMetadata.url,
        },
        {
          property: `twitter:image`,
          content: metaImage,
        },
        {
          name: `google-site-verification`,
          content: googleSiteVerificationCode,
        },
      ].concat(meta)}
    />
  )
}

Head.defaultProps = {
  lang: `pt-BR`,
  meta: [],
  description: ``,
}

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default Head
