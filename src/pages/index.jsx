import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Canvas from "../components/Canvas/Canvas";
import Footer from "../components/Footer/Footer";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./index.css";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="home">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Canvas />
          <h1>Karim El Khazaani</h1>
          <p>
            Front-end web developer
            <br />
            formerly at{" "}
            <a
              href="https://octopus.energy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span role="img" aria-label="Octopus">
                🐙
              </span>
              <span role="img" aria-label="Energy">
                ⚡
              </span>
            </a>
          </p>
          <div>
            <a
              href="https://crabland.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              My{" "}
              <span role="img" aria-label="Camera">
                📸
              </span>{" "}
              blog
            </a>
          </div>
          <div>
            <a
              href="https://github.com/crabdul/.dotfiles/blob/master/.init.vim"
              target="_blank"
              rel="noopener noreferrer"
            >
              My cherished vimrc file
            </a>
          </div>
          <div>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              My CV
            </a>
          </div>
          <h3>Writing</h3>
          <PostListing postEdges={postEdges} />
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: 'off' */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
