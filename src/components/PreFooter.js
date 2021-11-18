import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Title from "../components/Title"

export default function PreFooter() {
    return (
        <StaticQuery
        query = {graphql`
            {
                strapiNopad {
                title
                text {
                    text
                    id
                }
                }
                strapiSorted {
                text
                }
            }
        `}
        render = {
            data => {
                const {strapiNopad: nopad } = data;
                const {strapiSorted: sorted } = data;
                return (<div>
                    <div>
                        <article>
                            <Title title={nopad.title} />
                            {
                                nopad.text.map(text => {
                                    return <p>{text.text}</p>
                                })
                            }
                        </article>
                    </div>
                    <div>
                        <p>{sorted.text}</p>
                    </div>
                </div>)
            }
        }
        />
    )
}