import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import './index.css';

class Index extends React.Component {
    render() {
        const postEdges = this.props.data.allMarkdownRemark.edges;
        return (
            <Layout>
                <div className="home">
                    <Helmet title={config.siteTitle} />
                    <SEO />
                    <h1>Karim El Khazaani</h1>
                    <p>Front-end web developer based in London</p>
                    <PostListing postEdges={postEdges} />
                    <p>
                        <a href='https://github.com/crabdul'>crabdul</a>
                        {' '}/{' '}
                        <a href='mailto:karim.elhazaani@zoho.com' >karim.elhazaani@zoho.com</a>
                    </p>
                </div>
            </Layout>
        );
    }
}

export default Index;

/* eslint no-undef: "off" */
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
