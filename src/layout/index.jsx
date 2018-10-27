import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import './index.css';

export default class MainLayout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className='page'>
                <Helmet>
                    <meta name="description" content={config.siteDescription} />
                    <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet" />
                </Helmet>
                <div className="wrapper">
                    {children}
                </div>
            </div>
        );
    }
}
