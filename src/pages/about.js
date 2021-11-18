import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import { GatsbyImage, getImage} from 'gatsby-plugin-image';
import MediaCard from "../components/MediaCard";
import PreFooter from "../components/PreFooter"

const About = ({data}) => {
  const {strapiAbout: about } = data;
  const {title,subtitle, cardWithMedia, coverImage} = about;
  return <Layout>
      <section className="about-page">
      <div className="section-center about-center">
        <GatsbyImage image={getImage(coverImage)} className="about-img" />
        <article className="about-text">
          <Title title={title} />
          <p>{subtitle}</p>
        </article>
      </div>
      <div>
        {
          cardWithMedia.map((card) => {
              return <MediaCard key={card.id} {...card}/>
          })
        }
      </div>
    </section>
    <PreFooter></PreFooter>
  </Layout>
}

export const query = graphql`
  {
    strapiAbout {
      id
      cardWithMedia {
        id
        sno
        title
        text {
          text
          id
        }
        media {
          id
          media {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
      subtitle
      title
      coverImage {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
export default About
