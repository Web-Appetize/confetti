import React from "react"
import Vid from "../components/Video"
import { StaticQuery, graphql } from "gatsby"
import Title from "../components/Title"

export default function PreFooter() {
  return (
      <StaticQuery
      query = {graphql`
      {
        strapiHome {
          title
          videoUrl
        }
      }
    `}
      render = {
          data => {
              const {strapiHome: home } = data;
              return (
                <header className="hero">
                  <div className="section-center hero-center">
                    <article className="hero-info">
                      <Vid
                        videoSrcURL={home.videoUrl}
                        videoTitle={home.title}
                      />
                      <p>{home.title}</p>
                    </article>
                  </div>
                </header>
              )
          }
      }
      />
  )
}
