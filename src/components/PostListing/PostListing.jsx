import React from 'react';
import { Link } from 'gatsby';
import { format } from 'date-fns';
import './PostListing.css';

const formatDate = (date) => format(date, 'D MMM, YYYY');

class PostListing extends React.Component {
    getPostList() {
        const postList = [];
        this.props.postEdges.forEach(postEdge => {
            postList.push({
                path: postEdge.node.fields.slug,
                tags: postEdge.node.frontmatter.tags,
                cover: postEdge.node.frontmatter.cover,
                title: postEdge.node.frontmatter.title,
                date: postEdge.node.fields.date,
                excerpt: postEdge.node.excerpt,
                timeToRead: postEdge.node.timeToRead
            });
        });
        return postList;
    }
    render() {
        const postList = this.getPostList();
        return (
            <ul className='post-list'>
                {/* Your post list here. */
                    postList.map(post => (
                        <li key={post.title}>
                            <span className='post-meta'>
                                {formatDate(post.date)}
                            </span>
                            <Link
                                className='post-link'
                                to={post.path}
                            >
                                {post.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default PostListing;
