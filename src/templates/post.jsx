import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import PostTags from '../components/PostTags/PostTags';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import { formatDateLong } from '../lib/formatters';
import './tomorrow.css';
import './post.css';

export default class PostTemplate extends React.Component {
    render() {
        const { slug } = this.props.pageContext;
        const postNode = this.props.data.markdownRemark;
        const post = postNode.frontmatter;
        if (!post.id) {
            post.id = slug;
        }
        if (!post.category_id) {
            post.category_id = config.postDefaultCategoryID;
        }
        return (
            <Layout>
                <div>
                    <Helmet>
                        <title>{`${post.title} | ${config.siteTitle}`}</title>
                    </Helmet>
                    <SEO postPath={slug} postNode={postNode} postSEO />
                    <div>
                        <header className='site-header'>
                            <Link
                                className='site-title'
                                to='/'
                            >
                                Karim El Khazaani
                            </Link>
                        </header>
                        <h1 className='post-title'>{post.title}</h1>
                        <p className='post-meta'>{formatDateLong(post.date)}</p>
                        <div className="post-content">
                            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
                        </div>
                        <div className='post-meta'>
                            <PostTags tags={post.tags} />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;
