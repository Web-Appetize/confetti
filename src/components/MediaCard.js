import React from "react"
import Title from "../components/Title"
import { GatsbyImage, getImage} from 'gatsby-plugin-image';

const MediaCard = ({title, media, text}) => {
  return (
        <article className="about-text">
            <Title title={title} />
            {
                media.map(media => {
                    return <GatsbyImage image={getImage(media.media)} className="about-img" />
                })
            }
            {
                text.map(text => {
                    return <p>{text.text}</p>
                })
            }
        </article>
    )
}

export default MediaCard