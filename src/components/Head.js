import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { bootstrapCdn, googleSiteVerificationCode } from "../constants"
import favicon from "../images/favicon.webp"
import logoText from "../images/logo-text.webp"

function Head({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaImage = `${site.siteMetadata.siteUrl}${logoText}`

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
        {
          rel: `canonical`,
          href: `${site.siteMetadata.siteUrl}/`,
        },
        bootstrapCdn,
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
          name: `keywords`,
          content: `alluminy, esquadrias de alumínio, esquadrias, construção`,
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
          content: site.siteMetadata.siteUrl,
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
          content: site.siteMetadata.siteUrl,
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
